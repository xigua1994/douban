window.addEventListener("resize",setRem);
window.addEventListener("orientationchange",setRem);
function setRem(){
	var html = document.querySelector("html");
	var width = document.body.getBoundingClientRect().width;
	html.style.fontSize = width / 16 + 'px';
};
setRem();
