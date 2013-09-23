
var wordslist = {
	"trap": [
		"<定身>",
		"<br><div id=shout style=position:absolute;width:100%;height:100%;" +
		"onmousemove=$(%26quot;submit%26quot;).disabled=true;this.style.zIndex=-1;></div>"
		]
};

(function() {
	var headerlink = document.getElementsByClassName("headerlink")[0];
	headerlink.appendChild(document.createElement("br"));
	for (name in wordslist)
		headerlink.appendChild(createConfigBar(false, wordslist[name][0], name, function() {
			if (this.value) {
				for (word in wordslist)
					if (word != name && $(word).value)
						$(word).onclick();
				words = wordslist[name][1];
			}
			else
				words = "";
		}));
})();
