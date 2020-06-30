function updateTime() {
    var date2 = new Date("07/04/2020, 19:00:00 GMT+01:00"),
        date1 = new Date(),
        Difference_In_Time = date2.getTime() - date1.getTime(),
        Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24)),
        Difference_In_Hours = Math.floor(Math.abs((date1 - date2) / 36e5 % 24)),
        Difference_In_Minutes = Math.floor(Difference_In_Time / (1000 * 60) % 60),
        Difference_In_Seconds = Math.ceil(Difference_In_Time / (1000) % 60),
        days = document.querySelector(".days p:first-of-type"),
        hours = document.querySelector(".hours p:first-of-type"),
        minutes = document.querySelector(".minutes p:first-of-type"),
        seconds = document.querySelector(".seconds p:first-of-type");
    days.textContent = Difference_In_Days;
    hours.textContent = Difference_In_Hours;
    minutes.textContent = Difference_In_Minutes;
    seconds.textContent = Difference_In_Seconds;
}
updateTime();

setInterval(updateTime, 1000);

function hetIsBal() {
    document.querySelector(".overlay").classList.toggle("displayNone");
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function flyNames() {
    var allNames = document.querySelectorAll(".overlay h1"),
        i;
    for (i = 0; i < allNames.length; i++) {
        var randh = Math.ceil(Math.random() * 93 ),
        randv = Math.ceil(Math.random() * 97 ),
        randColor = getRandomColor(),
        randAng = Math.ceil(Math.random() * 360 );

        
        allNames[i].style="top: " + randh + "%; left: " + randv + "%; color: " + randColor + "; transform: rotate(" + randAng +"deg);"; 
    }
}
setInterval(flyNames, 5000)

flyNames();