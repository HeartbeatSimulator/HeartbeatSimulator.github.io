var animations;
var heartrate;
var slider;
var bpm;


window.onload = () => {
	animations = document.getElementById("heartsvg").querySelectorAll("animate");
	slider = document.getElementById("slider");
	bpm = document.getElementById("bpm");
	heartrate = slider.value;
	console.log(heartrate);
	slider.oninput = () => bpm.textContent = slider.value; 
	animations[0].onrepeat = () => { 
		for (var animation of animations) animation.setAttribute("dur", 60 / slider.value);
	};
};