
//content_script
//including script insertion, view initialization and update function

//view initialization
(function() {
	//div construct
	function constructDiv() {
		var div = document.createElement("div");
		div.id = "myDiv";

		for (var i = 0; i < 8; i++)
			div.appendChild(document.createElement("div"));
		div.children[0].id = "myMain";
		div.children[1].id = "myAttack";
		div.children[2].id = "myPick";
		div.children[3].id = "myCorpse";
		div.children[4].id = "myHeal";
		div.children[5].id = "myMake";
		div.children[6].id = "myShop";
		div.children[7].id = "myBack";

		return div;
	}

	var body = document.body;
	var form = document.getElementById("cmd");

	body.removeChild(body.children[4]);
	document.getElementsByTagName("table")[5].style.width = "400px";
	document.getElementById("chatmsg").style.width = "380px";
	//form.style.display = "none";
	form.parentElement.appendChild(constructDiv());
})();

//insert js to DOM
(function() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	var scriptURL = chrome.extension.getURL("page.js");
	script.src = scriptURL;
	document.head.appendChild(script);
})();

//div update function
function update() {

}

//binding page event
document.addEventListener("Update", update);
