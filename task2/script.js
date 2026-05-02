let seconds = 0, minutes = 0, hours = 0;
let display = document.getElementById("display");
let timer = null;

function stopwatch() {
    seconds++;
    if(seconds / 60 === 1) { 
        seconds = 0; 
        minutes++; 
    }
    if(minutes / 60 === 1) { 
        minutes = 0; 
        hours++; 
    }
    
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    display.innerHTML = h + ":" + m + ":" + s;
}

function start() {
    if(timer !== null) clearInterval(timer);
    timer = setInterval(stopwatch, 1000);
}

function stop() { 
    clearInterval(timer); 
}

function reset() {
    clearInterval(timer);
    seconds = 0; 
    minutes = 0; 
    hours = 0;
    display.innerHTML = "00:00:00";
}