const minuteHand = document.getElementById("minute-hand");

const secondHand = document.getElementById("second-hand");

const hourHand = document.getElementById("hour-hand");

setInterval (
    function() {
        const now = new Date();
        const second = now.getSeconds()*6;
        const minute = now.getMinutes()*6;
        const hour = now.getHours()*30 + now.getMinutes() / 2;

        secondHand.style.transform = "rotate(" + second + "deg)";
        minuteHand.style.transform = "rotate(" + minute + "deg)";
        hourHand.style.transform = "rotate(" + hour + "deg)";
    }, 1000
)