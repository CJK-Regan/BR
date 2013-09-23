
var wordslist = [
	{
		id: "trap",
		name: "<定身>",
		content: "<br><div id=shout style=position:absolute;width:100%;height:100%;" +
			"onmousemove=$(%26quot;submit%26quot;).disabled=true;this.style.zIndex=-1;></div>"
	}
];

(function() {
	var headerlink = document.getElementsByClassName("headerlink")[0];
	headerlink.appendChild(document.createElement("br"));
	for (var i = 0; i < wordslist.length; i++)
		headerlink.appendChild(createConfigBar(false, wordslist[i].name, wordslist[i].id, function() {
			if (this.value) {
				for (var j = 0; j < wordslist.length; j++)
					if (wordslist[j].id != this.id && $(wordslist[j].id).value)
						$(wordslist[j].id).onclick();
				words = wordslist[i].content;
			}
			else
				words = "";
		}));
})();
