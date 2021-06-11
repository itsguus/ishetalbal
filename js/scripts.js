
var interVar,
    geenBal = true,
    date2 = new Date("08/07/2021, 20:-6:00 GMT+02:00");

function updateTime() {
    var date1 = new Date(),
        Difference_In_Time = date2.getTime() - date1.getTime(),
        Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24)),
        Difference_In_Hours = Math.floor(Math.abs((date1 - date2) / 36e5 % 24)),
        Difference_In_Minutes = Math.floor(Difference_In_Time / (1000 * 60) % 60),
        Difference_In_Seconds = Math.ceil(Difference_In_Time / (1000) % 60),
        days = document.querySelector(".days p:first-of-type"),
        hours = document.querySelector(".hours p:first-of-type"),
        minutes = document.querySelector(".minutes p:first-of-type"),
        seconds = document.querySelector(".seconds p:first-of-type");
    if(Difference_In_Time < 0) {
        Difference_In_Seconds =0;
        Difference_In_Minutes =0;
        Difference_In_Hours =0;
        Difference_In_Days =0;
    }
    days.textContent = Difference_In_Days;
    hours.textContent = Difference_In_Hours;
    minutes.textContent = Difference_In_Minutes;
    seconds.textContent = Difference_In_Seconds;
    if (Difference_In_Seconds === 0 && geenBal) {
        startBal();
        geenBal = false;
        setTimeout(endBal, 28800000);
    }
    if (Difference_In_Days < 1) {
        document.querySelector("main").classList.add("buttonGone");
        document.querySelector("a").style = "display: none;";
    }
}

updateTime();
setInterval(updateTime, 1000);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function flyNames() {
    var allNames = document.querySelectorAll(".overlay div h1"),
        i;
    for (i = 0; i < allNames.length; i++) {
        var randh = Math.ceil(Math.random() * 93),
            randv = Math.ceil(Math.random() * 97),
            randColor = getRandomColor(),
            randAng = Math.ceil(Math.random() * 360),
            randSize = ((Math.random() * 20) / 10).toFixed(2),
            randShade = randSize * 2;
            console.log("HI");
        allNames[i].style = "top: " + randh + "%; left: " + randv + "%; color: " + randColor + "; transform: rotate(" + randAng + "deg); font-size:" + randSize + "rem; text-shadow: " + randShade + "px " + randShade + "px 5px rgba(0,0,0,0.5);";
    }
}

function startBal() {
    setTimeout(flyNames, 20);
    setInterval(flyNames, 10000);
    document.querySelector(".overlay").classList.remove("displayNone");
}

function endBal() {
    clearInterval(interVar);
    document.querySelector(".overlay").classList.add("displayNone");
}
