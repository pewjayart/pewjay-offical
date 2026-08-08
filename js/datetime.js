const clock = document.getElementById("clock");
const day = document.getElementById("day");
const themeIcon = document.getElementById("themeIcon");

function updatePHTime() {

    const now = new Date();

    const options = {
        timeZone: "Asia/Manila",
        weekday: "long",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };

    const formatter = new Intl.DateTimeFormat("en-PH", options);

    const parts = formatter.formatToParts(now);

    let weekday = "";
    let hour = "";
    let minute = "";
    let second = "";
    let period = "";

    parts.forEach(part => {

        switch (part.type) {

            case "weekday":
                weekday = part.value;
                break;

            case "hour":
                hour = part.value;
                break;

            case "minute":
                minute = part.value;
                break;

            case "second":
                second = part.value;
                break;

            case "dayPeriod":
                period = part.value;
                break;

        }

    });

    day.textContent = weekday;
    clock.textContent = `${hour}:${minute}:${second} ${period}`;

    const hour24 = Number(
        new Intl.DateTimeFormat("en-PH", {
            timeZone: "Asia/Manila",
            hour: "numeric",
            hour12: false
        }).format(now)
    );

    if (hour24 >= 6 && hour24 < 18) {

        themeIcon.textContent = "☀️";

    } else {

        themeIcon.textContent = "🌙";

    }

}

updatePHTime();

setInterval(updatePHTime, 1000);