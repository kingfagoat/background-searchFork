chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "getSelectedText") {
      sendResponse({ selectedText: window.getSelection().toString() });
    }
  });
  