function trans(el){
	el.style.transition = "0.5s";
}
function yep(el){
	document.getElementById('nope').style.display = "none";
	var ques = document.getElementById('question');
	ques.style.height = "10%";
	ques.style.opacity = "0";
	document.getElementsByTagName('header')[0].style.height = "0%";
	document.getElementsByTagName('footer')[0].style.height = "0%";
	document.getElementById('yes').style.opacity = "1";
	document.getElementById('yes').currentTime = 0;
	var quote = document.querySelectorAll('#quote div');
	for (var i = 0; i < quote.length; i++) {
		quote[i].style.color = "transparent";
	}
	setCookie("question","yes",1);
}
function nope(el){
	document.getElementById('yep').style.display = "none";
	var ques = document.getElementById('question');
	ques.style.height = "10%";
	ques.style.opacity = "0";
	var quote = document.querySelectorAll('#quote div');
	for (var i = 0; i < quote.length; i++) {
		quote[i].style.color = "black";
	}
	document.getElementById('sad').style.transform = "translateX(-160%)";
	document.getElementById('sad').style.opacity = "1";
	document.getElementById('hap').style.opacity = "0";
	document.getElementsByTagName('header')[0].style.height = "0%";
	document.getElementsByTagName('footer')[0].style.height = "0%";
	document.getElementById('no').style.opacity = "1";
	document.getElementById('no').currentTime = 0;
	setCookie("question","no",1);
}


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("question");
  if (user == "yes") {
  	var no = document.getElementsByClassName('no');
  	for (var i = 0; i < no.length; i++) {
  		no[i].className = "cno";
  	}
  	document.getElementById('yes').style.opacity = "1";
	document.getElementById('yes').currentTime = 0;
	var quote = document.querySelectorAll('#quote div');
	for (var i = 0; i < quote.length; i++) {
		quote[i].style.color = "transparent";
		quote[i].style.transition = "1s";
	}
  } 
  if (user == "no") {
  	var yes = document.getElementsByClassName('yes');
  	for (var i = 0; i < yes.length; i++) {
  		yes[i].className = "cyes";
  	}
  	var quote = document.querySelectorAll('#quote div');
	for (var i = 0; i < quote.length; i++) {
		quote[i].style.color = "black";
		quote[i].style.transition = "1s";
	}
	document.getElementById('sad').style.transform = "translateX(-160%)";
	document.getElementById('sad').style.opacity = "1";
	document.getElementById('hap').style.opacity = "0";
	document.getElementById('no').style.opacity = "1";
	document.getElementById('no').currentTime = 0;
  }

}
