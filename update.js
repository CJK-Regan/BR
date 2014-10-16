function showDiv(id) {
	$id("cmd").hidden = true;
	$id(id).hidden = false;
	for (var i = 0; i < divList.length; i++)
		if (divList[i] != id)
			$id(divList[i]).hidden = true;
}

function update() {
	if ($id("shout"))
		$id("shout").hidden = true;
	if (!flag) {
		showDiv("cmd");
		return;
	}

	//Main
	if ($id("move")) {
		showDiv("myMain");
		
		//Move
		var places = $id("cmd").getElementsByTagName("select")[0].children;
		for (var i = 0; i < moveList.length; i++) 
			$id("move" + i).hidden = true;
		for (var i = 1; i < places.length; i++)
			$id("move" + places[i].value).hidden = false;

		//Items
		for (var i = 1; i <= 5; i++)
			if ($id("itm" + i)) {
				$id("item" + i).innerHTML = $id("itm" + i).nextSibling.text.slice(0, -3);
				$id("item" + i).hidden = false;
			}
			else
				$id("item" + i).hidden = true;

		return;
	}

	//Attack
	if ($id("cmd").elements[0].name == "message") {
		showDiv("myAttack");
		$id("attack").wid = $id("cmd").elements[2].value;
		$id("attack").kind = $id("cmd").elements[3].value;
		return;
	}

	//Pick
	if ($id("itemget")) {
		showDiv("myPick");
		if ($id("message").firstElementChild)
			$id("message").removeChild($id("message").firstElementChild);
		$id("message").appendChild($id("cmd").getElementsByClassName("yellow")[0]);
		return;
	}

	//Corpse
	if ($id("cmd").elements[0].value == "corpse") {
		showDiv("myCorpse");
		$id("myCorpse").wid = $id("cmd").elements[1].value;
		for (var i = 0; i < corpseList.length; i++)
			if ($id(corpseList[i])) {
				$id("m" + corpseList[i]).innerHTML = $id(corpseList[i]).nextSibling.text;
				$id("m" + corpseList[i]).hidden = false;
			}
			else
				$id("m" + corpseList[i]).hidden = true;
		return;
	}

	//Swap
	if ($id("swapitm1")) {
		showDiv("mySwap");
		for (var i = 0; i <=5; i++)
			$id("mySwap").getElementsByTagName("button")[i].innerHTML =
				$id("cmd").getElementsByTagName("a")[i].text;
		return;
	}

	//Rest
	if ($id("rest")) {
		showDiv("myHeal");
		return;
	}

	showDiv("cmd");
	$id("submit").onclick = function() {
		myPost(getRequestBody(document.forms['cmd']));
		return false;
	}
}
