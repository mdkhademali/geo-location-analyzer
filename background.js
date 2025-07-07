chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "showOnMap",
    title: "Show on Map",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "showOnMap") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        const selectedText = window.getSelection().toString();
        window.postMessage({ type: "SHOW_ON_MAP", location: selectedText });
      }
    });
  }
});