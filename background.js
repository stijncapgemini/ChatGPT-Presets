(async () => {
  let lastStatus = null;

  chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
    if (tab && tab.id === tabId && tab.status !== lastStatus) {
      lastStatus = tab.status;
      if (tab.status === "complete") {
        chrome.tabs.sendMessage(tabId, { url: tab.url });
        console.table(tabId, changeInfo, tab);
      }
    }
  });
})();
