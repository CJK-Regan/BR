function checkURL(tabId, changeInfo, tab) {
	if (tab.url == "http://br.265g.com/game.php") {
		chrome.pageAction.show(tabId);
	}
};

chrome.tabs.onUpdated.addListener(checkURL);
