var animations;
var heartrate;
var slider;
var bpm;


function init() {
	animations = document.getElementById("heartsvg").querySelectorAll("animate");
	slider = document.getElementById("slider");
	bpm = document.getElementById("bpm");
	heartrate = slider.value;
	console.log(getBPM());
	slider.oninput = () => {
		bpm.textContent = slider.value;
		for (let animation of animations) {
			animation.setAttribute("dur", 60 / slider.value);
		}
	};
}

function getBPM() {
	return `The heart is currently pumping at ${heartrate} beats per minute!`;
}