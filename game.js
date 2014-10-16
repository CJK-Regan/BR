//Change view
(function() {
	document.getElementsByTagName("table")[5].style.width = "400px";
	document.getElementById("chatmsg").style.width = "380px";
	document.body.removeChild(document.body.lastElementChild);
})();

//insert js to DOM
function insertJS(fileName) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = chrome.extension.getURL(fileName);
	document.head.appendChild(script);
}

insertJS("update.js");
insertJS("main.js");
//insertJS("shout.js");
