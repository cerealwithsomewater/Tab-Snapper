const snapBtn = document.getElementById("snap");
const listEl = document.getElementById("list");

// Render current snapshots
async function loadSnapshots() {
  const { snapshots = [] } = await chrome.storage.local.get("snapshots");
  listEl.innerHTML = snapshots
    .map(s => `
      <li>
        <strong>${new Date(s.created).toLocaleString()}</strong>
        (${s.tabs.length} tabs)
        <button data-id="${s.id}">Restore</button>
      </li>`)
    .join("");
  // Attach handlers
  listEl.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      chrome.runtime.sendMessage({ type: "RESTORE", id }, r => {
        if (r.success) window.close();
      });
    });
  });
}

// Snap new
snapBtn.addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "SAVE" }, r => {
    if (r.success) loadSnapshots();
  });
});

// Initial load
loadSnapshots();
