
chrome.browserAction.onClicked.addListener(function(tab) {
	// alert("Merging Code...");
	chrome.tabs.executeScript(null, {file: "/execute.js"});
});