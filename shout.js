
var wordslist = [
	{
		id: "trap",
		name: "<影子束缚术>",
		content: "影子束缚术" +
			"<img src=x onerror=this.hidden=true;if(!$(%26quot;myDiv%26quot;))$(%26quot;submit%26quot;).disabled=true;>"
	},
	{
		id: "disarm",
		name: "<缴械>",
		content: "除你武器" +
			"<img src=x onerror=this.hidden=true;if(!$(%26quot;myDiv%26quot;))$(%26quot;submit%26quot;).onclick=function(){" +
			"o=zXmlHttp.createRequest();o.open(%26quot;post%26quot;,%26quot;command.php%26quot;,true);o.setRequestHeader(" +
			"%26quot;Content-Type%26quot;,%26quot;application/x-www-form-urlencoded%26quot;);o.onreadystatechange=" +
			"function(){if(o.readyState==4)showGamedata(o.responseText);};o.send(%26quot;" +
			"mode=itemmain%26command=offwep" +
			"%26quot;);};>"
	},
	{
		id: "push",
		name: "<神罗天征>",
		content: "神罗天征" +
			"<img src=x onerror=this.hidden=true;if(!$(%26quot;myDiv%26quot;))$(%26quot;submit%26quot;).onclick=function(){" +
			"o=zXmlHttp.createRequest();o.open(%26quot;post%26quot;,%26quot;command.php%26quot;,true);o.setRequestHeader(" +
			"%26quot;Content-Type%26quot;,%26quot;application/x-www-form-urlencoded%26quot;);o.onreadystatechange=" +
			"function(){if(o.readyState==4)showGamedata(o.responseText);};o.send(" +
			"%26quot;mode=command%26command=move%26moveto=%26quot;%2BparseInt(Math.random()*22));};>"
	}
];

(function() {
	var headerlink = document.getElementsByClassName("headerlink")[0];
	headerlink.appendChild(document.createElement("br"));
	for (var i = 0; i < wordslist.length; i++) {
		var tmp = i;
		headerlink.appendChild(createConfigBar(false, wordslist[i].name, wordslist[i].id, function(bar) {
			if (bar.value) {
				for (var j = 0; j < wordslist.length; j++)
					if (wordslist[j].id != bar.id && $(wordslist[j].id).value)
						$(wordslist[j].id).onclick();
				words = wordslist[tmp].content;
			}
			else
				words = "";
		}));
	}
})();
