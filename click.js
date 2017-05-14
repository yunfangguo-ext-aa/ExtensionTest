// Copyright (c) 2017 Robin. All rights reserved.


chrome.browserAction.onClicked.addListener(function(tab) {
	alert("Merging Code...");
	chrome.tabs.executeScript(null, {file: "/execute.js"});
});