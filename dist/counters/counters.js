let countInterval;
let counterInstance = 1;
let seconds1 = 30;
let seconds2 = 30;
var interval1, interval2;

const setSeconds = (instance, sec) => {
    let counter = `countdown${instance}`;
    document.getElementById(counter).textContent = sec;
} 

let countInterval1 = () => {
    seconds1 = 30;
    setSeconds(1, seconds1);
    interval1 = setInterval(() => {
        seconds1--;
        setSeconds(1, seconds1);
        if (seconds1 <= 0) {
            clearInterval(interval1);
            seconds1 = 30;
        };
    }, 1000);
}
let countInterval2 = () => {
    seconds2 = 30;
    setSeconds(2, seconds2);
    interval2 = setInterval(() => {
        seconds2--;
        setSeconds(2, seconds2);
        if (seconds2 <= 0) {
            clearInterval(interval2);
            seconds2 = 30;
        };
    }, 1000);
}


let countdown = () => {
    if(counterInstance === 1){
        clearInterval(interval1);
        countInterval1();
    }
    else {
        clearInterval(interval2);
        countInterval2();
    }
}
 
overwolf.settings.hotkeys.onPressed.addListener((res) => {
    if(res.name == "start_counter"){
        countdown();
        console.log("Starting count for "+counterInstance);
        counterInstance === 1 ? counterInstance = 2 : counterInstance = 1;
    }
})

overwolf.windows.getCurrentWindow((res) => {
    if(!res || !res.success){
        return;
    }
    overwolf.windows.changePosition(res.window.id, 1400,0);
})






