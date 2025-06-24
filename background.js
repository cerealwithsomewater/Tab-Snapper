// Helper to get all tabs across all windows
async function getAllTabs() {
  return await chrome.tabs.query({});
}

// Save a snapshot in chrome.storage.local
async function saveSnapshot() {
  const tabs = await getAllTabs();
  const snapshot = {
    id: Date.now(),
    created: new Date().toISOString(),
    tabs: tabs.map(t => ({ url: t.url, title: t.title }))
  };
  // Fetch existing snapshots
  const { snapshots = [] } = await chrome.storage.local.get("snapshots");
  snapshots.unshift(snapshot); // newest first
  await chrome.storage.local.set({ snapshots });
  return snapshot;
}

// Restore a snapshot: open each URL in a new tab
async function restoreSnapshot(id) {
  const { snapshots = [] } = await chrome.storage.local.get("snapshots");
  const snap = snapshots.find(s => s.id === id);
  if (!snap) throw new Error("Snapshot not found");
  for (const { url } of snap.tabs) {
    chrome.tabs.create({ url });
  }
}

// Message handling
chrome.runtime.onMessage.addListener((msg, _, sendResponse) => {
  if (msg.type === "SAVE") {
    saveSnapshot().then(snap => sendResponse({ success: true, snap }));
    return true; // keep port open for async
  }
  if (msg.type === "RESTORE") {
    restoreSnapshot(msg.id).then(() => sendResponse({ success: true }));
    return true;
  }
});
