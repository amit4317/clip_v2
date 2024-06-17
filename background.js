chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "runCommand",
      title: "Run Command in Terminal",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "runCommand") {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: sendCommandToServer,
        args: [info.selectionText]
      });
    }
  });
  
  function sendCommandToServer(command) {
    fetch('http://localhost:5000/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ command: command })
    })
    .then(response => response.json())
    .then(data => {
      window.postMessage({ type: 'COMMAND_OUTPUT', output: data.output }, '*');
    })
    .catch(error => {
      window.postMessage({ type: 'COMMAND_OUTPUT', output: `Error: ${error.message}` }, '*');
    });
  }
  