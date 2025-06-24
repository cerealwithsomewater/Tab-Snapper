# Tab Snapper

One-click snapshots of all your open Chrome tabs—and restore them anytime.

**Chrome Extension** • MV3 • No-frills bookmarking on steroids

---

## 🚀 Features

- **📸 Snap Tabs**  
  Save a snapshot of all open tabs (URL + title), timestamped for easy reference.

- **🔁 Restore Tabs**  
  Reopen an entire snapshot in new tabs—pick up exactly where you left off.

- **🕓 History**  
  Stores snapshots in `chrome.storage.local`. Retain as many as you like.

- **🖼️ (Optional)**  
  Capture screenshots of each tab for visual recall (requires permission).

---

## 🛠️ Installation

1. **Clone the repo**

    ```bash
    git clone https://github.com/cerealwithsomewater/tab-snapper.git
    ```

2. **Open Chrome Extensions**

    Go to: `chrome://extensions/`

3. **Enable Developer Mode**

    Toggle the switch in the top-right corner.

4. **Load Unpacked Extension**

    Click **Load unpacked** and select the `tab-snapper/` folder.

5. **Pin the Extension**

    Pin the 📸 Tab Snapper icon to your Chrome toolbar.

---

## 📖 Usage

1. Click the Tab Snapper icon in your toolbar.
2. Hit **"Snap Tabs"** to record the current open tabs.
3. Review saved snapshots listed below.
4. Click **"Restore"** to reopen all tabs from that snapshot.

---

## 🧪 Project Structure

```
tab-snapper/
├── manifest.json        # Extension manifest (MV3)
├── background.js        # Service worker for tab save/restore
├── popup.html           # UI for the extension popup
├── popup.js             # Logic for saving/restoring snapshots
└── styles.css           # Optional CSS styling
```

---

## 💡 Ideas for Improvement

- Name/tag each snapshot
- Export/import snapshots as JSON
- Sync snapshots via `chrome.storage.sync`
- Screenshot thumbnails of each tab
- Auto-snap at time intervals or shutdown

---

## 🤝 Contributing

1. Fork the repository  
2. Create your feature branch  
    ```bash
    git checkout -b cool-feature
    ```
3. Commit your changes  
    ```bash
    git commit -m "Add cool-feature"
    ```
4. Push to the branch  
    ```bash
    git push origin cool-feature
    ```
5. Open a Pull Request

---

## 📄 License

MIT © 2025 CerealWithSomeWater
