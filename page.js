
var divList = ["myMessage", "myMain", "myAttack", "myPick", "myCorpse", "myHeal", "myMake", "myShop", "myBind", "myBack"];

function createButton(name, command, id) {
	var button = document.createElement("button");
	button.innerHTML = name;
	button.onclick = function() {
		myPost(command);
	};
	button.id = id || null;
	return button;
}

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
	
	for (var i = 0; i < 22; i++)
		myMove.appendChild(createButton(moveList[i], "mode=command&command=move&moveto=" + i, "move" + i));
	
	//Items
	var myItems = $("myItems");
	myItems.align = "center";
	var title_items = document.createElement("p");
	title_items.innerHTML = "物品";
	myItems.appendChild(title_items);

	for (var i = 1; i <= 5; i++)
		myItems.appendChild(createButton(null, "mode=command&command=itm" + i, "item" + i));
	
	//Actions
	var myActions = $("myActions");
	myActions.align = "center";
	var title_actions = document.createElement("p");
	title_actions.innerHTML = "行为";
	myActions.appendChild(title_actions);

	myActions.appendChild(createButton("探索", "mode=command&command=search"));
	myActions.appendChild(createButton("静养", "mode=command&command=rest3"));
	myActions.appendChild(createButton("包扎", "mode=command&command=special&sp_cmd=sp_inf"));
	myActions.appendChild(createButton("商店", "mode=command&command=special&sp_cmd=sp_shop"));
	myActions.appendChild(createButton("合成", "mode=command&command=itemmain&itemcmd=itemmix"));
	myActions.appendChild(createButton("卸兵", "mode=itemmain&command=offwep"));

	var title_pose = document.createElement("p");
	title_pose.innerHTML = "姿态";
	myActions.appendChild(title_pose);
	myActions.appendChild(createButton("通常", "mode=special&command=pose0"));
	myActions.appendChild(createButton("攻击", "mode=special&command=pose1"));
	myActions.appendChild(createButton("防守", "mode=special&command=pose2"));
	myActions.appendChild(createButton("探索", "mode=special&command=pose3"));
	myActions.appendChild(createButton("隐藏", "mode=special&command=pose4"));
	myActions.appendChild(createButton("治疗", "mode=special&command=pose5"));

	var title_tac = document.createElement("p");
	title_tac.innerHTML = "策略";
	myActions.appendChild(title_tac);
	myActions.appendChild(createButton("通常", "mode=special&command=tac0"));
	myActions.appendChild(createButton("防御", "mode=special&command=tac2"));
	myActions.appendChild(createButton("反击", "mode=special&command=tac3"));
	myActions.appendChild(createButton("躲避", "mode=special&command=tac4"));

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

