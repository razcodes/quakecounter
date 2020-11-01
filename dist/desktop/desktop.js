const turnOnButton = document.getElementById('turn-on-button');
let isOn = false;

const toggleFunction = () => {
    isOn ? console.log("Turned Off"):console.log("Turned On");
    isOn = !isOn;
    turnOnButton.innerHTML = `Turn ${isOn ? "Off" : "On"}`
}

turnOnButton.addEventListener('click', toggleFunction);
