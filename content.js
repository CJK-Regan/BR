//change view
(function() {
	document.getElementsByTagName("table")[5].style.width = "400px";
	document.getElementById("chatmsg").style.width = "380px";
	document.body.removeChild(document.body.lastElementChild);
})();

//insert js to DOM
(function() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	var scriptURL = chrome.extension.getURL("page.js");
	script.src = scriptURL;
	document.head.appendChild(script);
})();
