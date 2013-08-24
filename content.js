
var divList = ["myMain", "myAttack", "myPick", "myCorpse", "myHeal", "myMake", "myShop", "myBack"]

//initialize div
(function() {
	//construct div
	function constructDiv() {
		var div = document.createElement("div");
		div.id = "myDiv";

		for (var i = 0; i < divList.length; i++) {
			div.appendChild(document.createElement("div"));
			div.lastChild.id = divList[i];
		}

		//Main
		var myMain = document.getElementById("myMain");
		for (var i = 0; i < 3; i++) {
			myMain.appendChild(document.createElement("div"));
		}
		myMain.children[0].id = "myMove";
		myMain.children[1].id = "myItems";
		myMain.children[2].id = "myActions";

		//Move

		
		//Items

		
		//Actions
		
		
		//Attack
		
		
		//Pick
		
		
		//Corpse
		
		
		//Heal
		
		
		//Make
		
		
		//Shop
		
		
		//Back

		
		return div;
	}

	//change DOM
	var body = document.body;
	var form = document.getElementById("cmd");

	document.getElementsByTagName("table")[5].style.width = "400px";
	document.getElementById("chatmsg").style.width = "380px";
	form.parentElement.appendChild(constructDiv());
	body.removeChild(body.children[4]);
	form.hidden = true;
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
