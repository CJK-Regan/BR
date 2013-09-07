
var divList = ["myMain", "myAttack", "myPick", "myCorpse", "myHeal", "myDrop"];
var moveList = ["分校", "北海岸", "北村住宅区", "北村公所", "邮电局", "消防署", "观音堂", "清水池",
	"西村神社", "墓地", "山丘地带", "隧道", "西村住宅区", "寺庙", "废校", 
	"南村神社", "森林地带", "源二郎池", "南村住宅区", "诊所", "灯塔", "南海岸"];
var corpseList = ["wep", "arb", "arh", "ara", "arf", "art", "itm1", "itm2", "itm3", "itm4", "itm5", "money"];

//Words to shout when actively attack.
var words = "";

function createButton(name, command, id) {
	var button = document.createElement("button");
	button.innerHTML = name;
	button.onclick = function() {
		myPost(eval(command));
	};
	button.id = id || null;
	return button;
}

//Initialize div structure.
(function() {
	//Root node 
	var div = document.createElement("div");
	$("cmd").parentElement.appendChild(div);
	div.id = "myDiv";

	//Create childNodes as main blocks.
	for (i in divList) {
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

	for (i in moveList)
		myMove.appendChild(createButton(moveList[i], "'mode=command&command=move&moveto=" + i + "'", "move" + i));
	
	//Items
	var myItems = $("myItems");
	myItems.align = "center";
	var title_items = document.createElement("p");
	title_items.innerHTML = "物品";
	myItems.appendChild(title_items);

	for (var i = 1; i <= 5; i++)
		myItems.appendChild(createButton(null, "'mode=command&command=itm" + i + "'", "item" + i));
	
	//Actions
	var myActions = $("myActions");
	myActions.align = "center";
	
	var title_actions = document.createElement("p");
	title_actions.innerHTML = "行为";
	myActions.appendChild(title_actions);
	myActions.appendChild(createButton("探索", "'mode=command&command=search'"));
	myActions.appendChild(createButton("静养", "'mode=command&command=rest3'"));
	myActions.appendChild(createButton("商店", "'mode=command&command=special&sp_cmd=sp_shop'"));
	myActions.appendChild(createButton("合成", "'mode=command&command=itemmain&itemcmd=itemmix'"));
	//Poison check is only enabled for cooking club
	myActions.appendChild(createButton("验毒", "'mode=command&command=special&sp_cmd=sp_poison'"));
	myActions.appendChild(createButton("整理", "'mode=command&command=itemmain&itemcmd=itemmerge'"));
	myActions.appendChild(createButton("卸兵", "'mode=itemmain&command=offwep'"));

	var title_pose = document.createElement("p");
	title_pose.innerHTML = "姿态";
	myActions.appendChild(title_pose);
	//myActions.appendChild(createButton("通常", "'mode=special&command=pose0'"));
	myActions.appendChild(createButton("攻击", "'mode=special&command=pose1'"));
	//myActions.appendChild(createButton("防守", "'mode=special&command=pose2'"));
	myActions.appendChild(createButton("探索", "'mode=special&command=pose3'"));
	myActions.appendChild(createButton("隐藏", "'mode=special&command=pose4'"));
	myActions.appendChild(createButton("治疗", "'mode=special&command=pose5'"));

	var title_tac = document.createElement("p");
	title_tac.innerHTML = "策略";
	myActions.appendChild(title_tac);
	//myActions.appendChild(createButton("通常", "'mode=special&command=tac0'"));
	//myActions.appendChild(createButton("防御", "'mode=special&command=tac2'"));
	myActions.appendChild(createButton("反击", "'mode=special&command=tac3'"));
	myActions.appendChild(createButton("躲避", "'mode=special&command=tac4'"));

	var title_bind = document.createElement("p");
	title_bind.innerHTML = "包扎";
	myActions.appendChild(title_bind);
	myActions.appendChild(createButton("体", "'mode=special&command=infb'"));
	myActions.appendChild(createButton("头", "'mode=special&command=infh'"));
	myActions.appendChild(createButton("腕", "'mode=special&command=infa'"));
	myActions.appendChild(createButton("足", "'mode=special&command=inff'"));

	//Attack
	var myAttack = $("myAttack");
	myAttack.appendChild(document.createElement("br"));
	myAttack.appendChild(createButton("攻击",
				"'mode=combat&message=" + words + "&wid=' + this.wid + '&command=' + this.kind", 
				"attack"));
	myAttack.appendChild(document.createElement("br"));
	myAttack.appendChild(createButton("逃跑", "'mode=combat&command=back'"));
	
	//Pick
	var myPick = $("myPick");
	var message = document.createElement("div");
	message.id = "message";
	message.innerHTML = "发现物品：";
	myPick.appendChild(message);
	myPick.appendChild(document.createElement("br"));
	myPick.appendChild(document.createElement("br"));
	myPick.appendChild(createButton("拾取", "'mode=itemmain&command=itemget'"));
	myPick.appendChild(document.createElement("br"));
	myPick.appendChild(createButton("丢弃", "'mode=itemmain&command=dropitm0'"));
	
	//Corpse
	var myCorpse = $("myCorpse");	
	myCorpse.appendChild(document.createElement("br"));
	for (var i = 0; i < corpseList.length; i++) {
		myCorpse.appendChild(createButton(null,
					"'mode=corpse&wid=' + $('myCorpse').wid + '&command=" + corpseList[i] + "'",
					"m" + corpseList[i]));
		myCorpse.appendChild(document.createElement("br"));
	}
	myCorpse.appendChild(document.createElement("br"));
	myCorpse.appendChild(createButton("返回", "'mode=corpse&command=menu'"));
	
	//Heal
	var myHeal = $("myHeal");	
	myHeal.appendChild(document.createElement("br"));
	myHeal.appendChild(createButton("静养", "'mode=rest&command=rest'"));
	myHeal.appendChild(document.createElement("br"));
	myHeal.appendChild(createButton("返回", "'mode=rest&command=back'"));
	
	//Drop
	var myDrop = $("myDrop");
	myDrop.appendChild(document.createElement("br"));
	myDrop.appendChild(createButton(null, "'mode=itemmain&command=dropitm0'"));
	myDrop.appendChild(document.createElement("br"));
	for (var i = 1; i <= 5; i++) {
		myDrop.appendChild(document.createElement("br"));
		myDrop.appendChild(createButton(null, "'mode=itemmain&command=swapitm" + i + "'"));
	}
	
	//First update when the page is loaded.
	update();
})();

function showDiv(id) {
	$("cmd").hidden = true;
	$(id).hidden = false;
	for (i in divList)
		if (divList[i] != id)
			$(divList[i]).hidden = true;
}

//Update div when contents in $("cmd") have changed.
function update() {
	//Main
	if ($("move")) {
		showDiv("myMain");
		
		//Move
		var places = $("cmd").getElementsByTagName("select")[0].children;
		for (i in moveList) 
			$("move" + i).hidden = true;
		for (var i = 1; i < places.length; i++)
			$("move" + places[i].value).hidden = false;

		//Items
		for (var i = 1; i <= 5; i++)
			if ($("itm" + i)) {
				$("item" + i).innerHTML = $("itm" + i).nextSibling.text.slice(0, -3);
				$("item" + i).hidden = false;
			}
			else
				$("item" + i).hidden = true;
	}
	//Attack
	else if ($("cmd").elements[0].name == "message") {
		showDiv("myAttack");
		$("attack").wid = $("cmd").elements[2].value;
		$("attack").kind = $("cmd").elements[3].value;
	}
	//Pick
	else if ($("itemget")) {
		showDiv("myPick");
		if ($("message").firstElementChild)
			$("message").removeChild($("message").firstElementChild);
		$("message").appendChild($("cmd").getElementsByClassName("yellow")[0]);
	}
	//Corpse
	else if ($("cmd").elements[0].value == "corpse") {
		showDiv("myCorpse");
		$("myCorpse").wid = $("cmd").elements[1].value;
		for (i in corpseList)
			if ($(corpseList[i])) {
				$("m" + corpseList[i]).innerHTML = $(corpseList[i]).nextSibling.text;
				$("m" + corpseList[i]).hidden = false;
			}
			else
				$("m" + corpseList[i]).hidden = true;
	}
	//Drop
	else if ($("swapitm1")) {
		showDiv("myDrop");
		for (var i = 0; i <=5; i++)
			$("myDrop").getElementsByTagName("button")[i].innerHTML =
				$("cmd").getElementsByTagName("a")[i].text;
	}
	//Rest
	else if ($("rest"))
		showDiv("myHeal");
	else {
		showDiv("cmd");
		$("submit").onclick = function() {
			myPost(getRequestBody(document.forms['cmd']));
			return false;
		}
	}
}

//Post request and deal with the response.
function myPost(command) {
	var request = new XMLHttpRequest();
	request.open("post", "command.php", true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function () {
		if (request.readyState == 4) {
			if (request.status == 200) {
				showGamedata(request.responseText);
				update();
			}
			else 
				showNotice(request.statusText);
		}
	};
	request.send(command);
}
