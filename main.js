//Configurations
var flag = true;
var autoAttack = true;
var words = "";

//Static lists
var divList = ["myMain", "myAttack", "myPick", "myCorpse", "myHeal", "mySwap"];
var moveList = ["分校", "北海岸", "北村住宅区", "北村公所", "邮电局", "消防署", "观音堂", "清水池",
	"西村神社", "墓地", "山丘地带", "隧道", "西村住宅区", "寺庙", "废校", 
	"南村神社", "森林地带", "源二郎池", "南村住宅区", "诊所", "灯塔", "南海岸"];
var corpseList = ["wep", "arb", "arh", "ara", "arf", "art", "itm1", "itm2", "itm3", "itm4", "itm5", "money"];

function $id(id) { return document.getElementById(id); }

function createButton(name, command, id) {
	var button = document.createElement("button");
	button.innerHTML = name;
	button.onclick = function() {
		myPost(eval(command));
	};
	button.id = id || null;
	return button;
}

function createConfigBar(config, name, id, func) {
	var a = document.createElement("a");
	a.value = config;
	if (config)
		a.style.color = "green";
	a.innerHTML = name;
	a.id = id || null;
	a.onclick = function() {
		this.value = !this.value;
		if (this.value)
			this.style.color = "green";
		else
			this.removeAttribute("style");
		if (func)
			func(this);
	};
	return a;
}

//Header
(function() {
	var headerlink = document.getElementsByClassName("headerlink")[0];
	headerlink.removeChild(headerlink.children[8]);
	headerlink.removeChild(headerlink.children[7]);
	headerlink.removeChild(headerlink.children[2]);
	var flagLink = document.createElement("a");
	flagLink.innerHTML = ">>切换界面";
	flagLink.onclick = function() {
		flag = !flag;
		update();
	}
	headerlink.appendChild(flagLink);
	headerlink.appendChild(createConfigBar(autoAttack, ">>自动攻击", "autoAttack"));
})();

//Div structure
(function() {
	//Root node 
	var div = document.createElement("div");
	$id("cmd").parentElement.appendChild(div);
	div.id = "myDiv";
	for (var i = 0; i < divList.length; i++) {
		div.appendChild(document.createElement("div"));
		div.lastChild.id = divList[i];
	}

	//Main
	var myMain = $id("myMain");
	for (var i = 0; i < 3; i++) {
		myMain.appendChild(document.createElement("div"));
		myMain.lastChild.style.border = "1px solid";
	}
	myMain.children[0].id = "myMove";
	myMain.children[1].id = "myItems";
	myMain.children[2].id = "myActions";

	//Move
	var myMove = $id("myMove");
	myMove.align = "center";
	var title_move = document.createElement("p");
	title_move.innerHTML = "移动";
	myMove.appendChild(title_move);
	for (var i = 0; i < moveList.length; i++)
		myMove.appendChild(createButton(moveList[i], "'mode=command&command=move&moveto=" + i + "'", "move" + i));
	
	//Items
	var myItems = $id("myItems");
	myItems.align = "center";
	var title_items = document.createElement("p");
	title_items.innerHTML = "物品";
	myItems.appendChild(title_items);
	for (var i = 1; i <= 5; i++)
		myItems.appendChild(createButton(null, "'mode=command&command=itm" + i + "'", "item" + i));
	
	//Actions
	var myActions = $id("myActions");
	myActions.align = "center";
	
	var title_actions = document.createElement("p");
	title_actions.innerHTML = "行为";
	myActions.appendChild(title_actions);
	myActions.appendChild(createButton("探索", "'mode=command&command=search'"));
	myActions.appendChild(createButton("静养", "'mode=command&command=rest3'"));
	myActions.appendChild(createButton("商店", "'mode=command&command=special&sp_cmd=sp_shop'"));
	myActions.appendChild(createButton("合成", "'mode=command&command=itemmain&itemcmd=itemmix'"));
	myActions.appendChild(createButton("验毒", "'mode=command&command=special&sp_cmd=sp_poison'"));
	myActions.appendChild(createButton("精炼", "'mode=command&command=special&sp_cmd=sp_wqjl'"));
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
	myActions.appendChild(createButton("虚", "'mode=special&command=infw'"));

	//Attack
	var myAttack = $id("myAttack");
	myAttack.appendChild(document.createElement("br"));
	myAttack.appendChild(createButton("攻击",
				"'mode=combat&message=' + words + '&wid=' + this.wid + '&command=' + this.kind", 
				"attack"));
	myAttack.appendChild(document.createElement("br"));
	myAttack.appendChild(createButton("逃跑", "'mode=combat&command=back'"));
	
	//Pick
	var myPick = $id("myPick");
	var message = document.createElement("div");
	message.id = "message";
	message.innerHTML = "发现物品：";
	myPick.appendChild(message);
	myPick.appendChild(document.createElement("br"));
	myPick.appendChild(document.createElement("br"));
	myPick.appendChild(createButton("拾取", "'mode=itemmain&command=itemget'"), "pick");
	myPick.appendChild(document.createElement("br"));
	myPick.appendChild(createButton("丢弃", "'mode=itemmain&command=dropitm0'"));
	
	//Corpse
	var myCorpse = $id("myCorpse");	
	myCorpse.appendChild(document.createElement("br"));
	for (var i = 0; i < corpseList.length; i++) {
		myCorpse.appendChild(createButton(null,
					"'mode=corpse&wid=' + $id('myCorpse').wid + '&command=" + corpseList[i] + "'",
					"m" + corpseList[i]));
		myCorpse.appendChild(document.createElement("br"));
	}
	myCorpse.appendChild(document.createElement("br"));
	myCorpse.appendChild(createButton("返回", "'mode=corpse&command=menu'"));
	
	//Heal
	var myHeal = $id("myHeal");	
	myHeal.appendChild(document.createElement("br"));
	myHeal.appendChild(createButton("静养", "'mode=rest&command=rest'"));
	myHeal.appendChild(document.createElement("br"));
	myHeal.appendChild(createButton("返回", "'mode=rest&command=back'"));
	
	//Swap
	var mySwap = $id("mySwap");
	mySwap.appendChild(document.createElement("br"));
	mySwap.appendChild(createButton(null, "'mode=itemmain&command=dropitm0'"));
	mySwap.appendChild(document.createElement("br"));
	for (var i = 1; i <= 5; i++) {
		mySwap.appendChild(document.createElement("br"));
		mySwap.appendChild(createButton(null, "'mode=itemmain&command=swapitm" + i + "'"));
	}

	//First update when the page is loaded.
	update();
})();

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
				autoPost();
			}
			else 
				showNotice(request.statusText);
		}
	};
	request.send(command);
}

//Conditions of autoPost
function autoPost() {
	if (!$id("myAttack").hidden && $id("autoAttack").value) {
		$id("attack").onclick();
		return;
	}
}
