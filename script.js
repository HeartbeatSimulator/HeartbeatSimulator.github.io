function init() {
    console.log(getBPM());
}

function getBPM() {
    return `The heart is currently ${60 / document.getElementsByTagName("animate")[0].getAttribute("dur")} bpm!`;
}