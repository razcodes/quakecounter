let countInterval;

overwolf.settings.hotkeys.onPressed.addListener((res) => {
    if(res.name == "start_counter"){
        console.log("Starting count!")
        countdown();
    }
})

const countdown = () => {
        seconds = 30;
        setSeconds(seconds);
        clearInterval(countInterval);
        countInterval = setInterval(() => {
            seconds--;
            setSeconds(seconds);
            if (seconds <= 0) {
                clearInterval(countInterval);
            };
    }, 1000);
}

const setSeconds = (sec) => {
    document.getElementById("countdown").textContent = sec;
} 

overwolf.windows.getCurrentWindow((res) => {
    if(!res || !res.success){
        return;
    }
    overwolf.windows.changePosition(res.window.id, 1400,0);
})
