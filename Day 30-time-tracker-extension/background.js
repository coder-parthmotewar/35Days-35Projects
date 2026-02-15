let activeTab = null;
let startTime = null;

chrome.tabs.onActivated.addListener(async info => {
  trackTime();
  activeTab = info.tabId;
  startTime = Date.now();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === "complete") {
    trackTime();
    activeTab = tabId;
    startTime = Date.now();
  }
});

function trackTime() {
  if (!activeTab || !startTime) return;

  chrome.tabs.get(activeTab, tab => {
    if (!tab || !tab.url) return;

    const domain = new URL(tab.url).hostname;
    const timeSpent = Date.now() - startTime;

    chrome.storage.local.get(domain, data => {
      const previous = data[domain] || 0;
      chrome.storage.local.set({
        [domain]: previous + timeSpent
      });
    });
  });
}
