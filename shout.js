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
