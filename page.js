//DOM event
var ev = document.createEvent("HTMLEvents");
ev.initEvent("Update", false, false);

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
	//update
	document.dispatchEvent(ev);
}

//command constructor

