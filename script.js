var heartrate = 80;

function init() {
	heartrate = 60 / document.getElementById("heartbeat").getAttribute("dur");
	console.log(getBPM());
}

function getBPM() {
	return `The heart is currently pumping at ${heartrate} beats per minute!`;
}