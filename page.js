
var divList = ["myMain", "myAttack", "myPick", "myCorpse", "myHeal", "myMake", "myShop", "myBack"];

//initialize div
(function() {
	var div = document.createElement("div");
	$("cmd").parentElement.appendChild(div);
	div.id = "myDiv";

	for (var i = 0; i < divList.length; i++) {
		div.appendChild(document.createElement("div"));
		div.lastChild.id = divList[i];
	}

	//Main
	var myMain = $("myMain");
	for (var i = 0; i < 3; i++) {
		myMain.appendChild(document.createElement("div"));
		myMain.lastChild.style.border = "1px solid";
	}
	myMain.children[0].id = "myMove";
	myMain.children[1].id = "myItems";
	myMain.children[2].id = "myActions";

	//Move
	var myMove = $("myMove");
	myMove.align = "center";
	var title_move = document.createElement("p");
	title_move.innerHTML = "移动";
	myMove.appendChild(title_move);

	var moveList = ["分校", "北海岸", "北村住宅区", "北村公所", "邮电局", "消防署", "观音堂", "清水池",
		"西村神社", "墓地", "山丘地带", "隧道", "西村住宅区", "寺庙", "废校", 
		"南村神社", "森林地带", "源二郎池", "南村住宅区", "诊所", "灯塔", "南海岸"];
	
	for (var i = 0; i < 22; i++) {
		var button = document.createElement("button");
		button.id = "move" + i;
		button.value = i;
		button.innerHTML = moveList[i];
		button.onclick = function() {
			myPost("mode=command&command=move&moveto=" + this.value);
		};
		myMove.appendChild(button);
	}
	
	//Items
	var myItems = $("myItems");
	myItems.align = "center";
	var title_items = document.createElement("p");
	title_items.innerHTML = "物品";
	myItems.appendChild(title_items);

	for (var i = 1; i <= 5; i++) {
		var button = document.createElement("button");
		button.id = "item" + i;
		button.value = i;
		button.onclick = function() {
			myPost("mode=command&command=itm" + this.value);
		};
		myItems.appendChild(button);
	}
	
	//Actions
	var myActions = $("myActions");
	myActions.align = "center";
	var title_actions = document.createElement("p");
	title_actions.innerHTML = "行为";
	myActions.appendChild(title_actions);

	var button_search = document.createElement("button");
	button_search.innerHTML = "探索";
	button_search.onclick = function() {
		myPost("mode=command&command=search");
	};
	myActions.appendChild(button_search);
	
	//Attack
	
	
	//Pick
	
	
	//Corpse
	
	
	//Heal
	
	
	//Make
	
	
	//Shop
	
	
	//Back

})();

//div update function
function update() {

}

//post dealer
function myPost(command) {
	var request = new XMLHttpRequest();
	request.open("post", "command.php", true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function () {
		if (request.readyState == 4) {
			if (request.status == 200) 
				showGamedata(request.responseText);
			else 
				showNotice(request.statusText);
		}
	};
	request.send(command);

	update();
}

//command constructor

