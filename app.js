const title = document.querySelector("div.hello:first-child h1");

function hadleTitleClick(){
	console.log("title was clicked!");
}

title.addEventListener("click", hadleTitleClick);

function handleMouseEnter(){
	title.innerText = "Mouse is here!";
}
function handleMouseLeave(){
	title.innerText = "Mouse is gone";
}
// 마우스위로울릴때
title.addEventListener("mouseenter",handleMouseEnter); 
// = title.onmouseenter = handleMouseEnter;

// 마우스 벗어날때
title.addEventListener("mouseleave",handleMouseLeave);

function handleWindowResize(){
	document.body.style.backgroundColor = "tomato";
    // document.title => <title>태그 
    // document.head  => <head> 태그
}
function handleWindowCopy(){
	alert("copier!");
}
function handleWindowOffline(){
	alert("SOS no WiFi");
}
function handleWindowOnline(){
	alert("ALL GOOD");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy); // ctrl+c
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);