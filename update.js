function showDiv(id) {
	$("cmd").hidden = true;
	$(id).hidden = false;
	for (var i = 0; i < divList.length; i++)
		if (divList[i] != id)
			$(divList[i]).hidden = true;
}

function update() {
	if ($("shout"))
		$("shout").hidden = true;
	if (!flag) {
		showDiv("cmd");
		return;
	}

	//Main
	if ($("move")) {
		showDiv("myMain");
		
		//Move
		var places = $("cmd").getElementsByTagName("select")[0].children;
		for (var i = 0; i < moveList.length; i++) 
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

		return;
	}

	//Attack
	if ($("cmd").elements[0].name == "message") {
		showDiv("myAttack");
		$("attack").wid = $("cmd").elements[2].value;
		$("attack").kind = $("cmd").elements[3].value;
		return;
	}

	//Pick
	if ($("itemget")) {
		showDiv("myPick");
		if ($("message").firstElementChild)
			$("message").removeChild($("message").firstElementChild);
		$("message").appendChild($("cmd").getElementsByClassName("yellow")[0]);
		return;
	}

	//Corpse
	if ($("cmd").elements[0].value == "corpse") {
		showDiv("myCorpse");
		$("myCorpse").wid = $("cmd").elements[1].value;
		for (var i = 0; i < corpseList.length; i++)
			if ($(corpseList[i])) {
				$("m" + corpseList[i]).innerHTML = $(corpseList[i]).nextSibling.text;
				$("m" + corpseList[i]).hidden = false;
			}
			else
				$("m" + corpseList[i]).hidden = true;
		return;
	}

	//Swap
	if ($("swapitm1")) {
		showDiv("mySwap");
		for (var i = 0; i <=5; i++)
			$("mySwap").getElementsByTagName("button")[i].innerHTML =
				$("cmd").getElementsByTagName("a")[i].text;
		return;
	}

	//Rest
	if ($("rest")) {
		showDiv("myHeal");
		return;
	}

	showDiv("cmd");
	$("submit").onclick = function() {
		myPost(getRequestBody(document.forms['cmd']));
		return false;
	}
}
