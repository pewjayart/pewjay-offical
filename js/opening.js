/* =========================================================
   PEWJAY OFFICIAL
   OPENING.JS
   Cinematic Opening Countdown
   Target: August 24, 2026
   ========================================================= */


/* =========================================================
   SETTINGS
   ========================================================= */

const TARGET_DATE =
    new Date("August 24, 2026 12:00:00").getTime();


/*
 * Change this if your home page
 * has a different filename.
 */

const HOME_PAGE = "home.html";


/* =========================================================
   ELEMENTS
   ========================================================= */

const daysElement =
    document.getElementById("opening-days");

const hoursElement =
    document.getElementById("opening-hours");

const minutesElement =
    document.getElementById("opening-minutes");

const secondsElement =
    document.getElementById("opening-seconds");

const progressBar =
    document.getElementById("opening-progress-bar");

const statusElement =
    document.getElementById("opening-status");


/* =========================================================
   PREVIOUS VALUES
   ========================================================= */

let previousValues = {

    days: null,

    hours: null,

    minutes: null,

    seconds: null

};


/* =========================================================
   TOTAL COUNTDOWN TIME
   ========================================================= */

const START_TIME =
    TARGET_DATE -
    new Date().getTime();


/* =========================================================
   FORMAT NUMBER
   ========================================================= */

function formatNumber(number) {

    return String(number)
        .padStart(2, "0");

}


/* =========================================================
   ANIMATE NUMBER
   ========================================================= */

function animateNumber(
    element,
    value,
    key
) {

    if (!element) {
        return;
    }


    const formatted =
        formatNumber(value);


    /*
     * Don't animate if the
     * value hasn't changed.
     */

    if (
        previousValues[key] ===
        formatted
    ) {

        return;

    }


    previousValues[key] =
        formatted;


    /*
     * Remove old animation.
     */

    element.classList.remove(
        "slide-down"
    );


    /*
     * Force browser reflow.
     * This allows the animation
     * to restart correctly.
     */

    void element.offsetWidth;


    /*
     * Update number.
     */

    element.textContent =
        formatted;


    /*
     * Start slide-down animation.
     */

    element.classList.add(
        "slide-down"
    );

}


/* =========================================================
   UPDATE PROGRESS
   ========================================================= */

function updateProgress(
    remainingTime
) {

    if (!progressBar) {
        return;
    }


    if (
        START_TIME <= 0
    ) {

        progressBar.style.width =
            "100%";

        return;

    }


    const elapsed =
        START_TIME -
        remainingTime;


    const percentage =
        (
            elapsed /
            START_TIME
        ) * 100;


    const safePercentage =
        Math.max(
            0,
            Math.min(
                percentage,
                100
            )
        );


    progressBar.style.width =
        `${safePercentage}%`;

}


/* =========================================================
   UPDATE STATUS
   ========================================================= */

function updateStatus(
    days
) {

    if (!statusElement) {
        return;
    }


    if (days === 0) {

        statusElement.textContent =
            "OPENING TODAY";

        return;

    }


    statusElement.textContent =
        `${days} DAYS LEFT`;

}


/* =========================================================
   UPDATE COUNTDOWN
   ========================================================= */

function updateCountdown() {

    const now =
        new Date().getTime();


    const distance =
        TARGET_DATE - now;


    /* =====================================================
       COUNTDOWN FINISHED
       ===================================================== */

    if (distance <= 0) {

        animateNumber(
            daysElement,
            0,
            "days"
        );

        animateNumber(
            hoursElement,
            0,
            "hours"
        );

        animateNumber(
            minutesElement,
            0,
            "minutes"
        );

        animateNumber(
            secondsElement,
            0,
            "seconds"
        );


        updateStatus(0);

        updateProgress(0);


        /*
         * Optional:
         * Redirect to home when
         * countdown reaches zero.
         *
         * Remove the // below
         * if you want automatic
         * opening of home.html.
         */

        // openWebsite();

        return;

    }


    /* =====================================================
       CALCULATE TIME
       ===================================================== */

    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (
                distance %
                (1000 * 60)
            ) /
            1000
        );


    /* =====================================================
       DISPLAY
       ===================================================== */

    animateNumber(
        daysElement,
        days,
        "days"
    );


    animateNumber(
        hoursElement,
        hours,
        "hours"
    );


    animateNumber(
        minutesElement,
        minutes,
        "minutes"
    );


    animateNumber(
        secondsElement,
        seconds,
        "seconds"
    );


    /* =====================================================
       STATUS
       ===================================================== */

    updateStatus(days);


    /* =====================================================
       PROGRESS
       ===================================================== */

    updateProgress(
        distance
    );

}


/* =========================================================
   OPEN HOME PAGE
   ========================================================= */

function openWebsite() {

    if (statusElement) {

        statusElement.textContent =
            "PEWJAY OFFICIAL IS NOW OPEN";

    }


    if (progressBar) {

        progressBar.style.width =
            "100%";

    }


    /*
     * Small transition delay.
     */

    setTimeout(() => {

        window.location.href =
            HOME_PAGE;

    }, 800);

}


/* =========================================================
   START COUNTDOWN
   ========================================================= */

function startCountdown() {

    updateCountdown();


    setInterval(() => {

        updateCountdown();

    }, 1000);

}


/* =========================================================
   PAGE READY
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        startCountdown();

    }
);


/* =========================================================
   PEWJAY OFFICIAL
   OPENING.JS
   NOTIFY + GOOGLE CALENDAR
   ========================================================= */


/* =========================================================
   SETTINGS
   ========================================================= */

const openingDate =
    new Date("2026-08-24T00:00:00+08:00");


/* =========================================================
   NOTIFY BUTTON
   ========================================================= */

const notifyButton =
    document.getElementById("notify-button");

const notifyCount =
    document.getElementById("notify-count");


/* =========================================================
   LOCAL NOTIFY COUNT
   ========================================================= */

let savedNotifyCount =
    Number(
        localStorage.getItem(
            "pewjayNotifyCount"
        )
    ) || 0;


notifyCount.textContent =
    savedNotifyCount;


/* =========================================================
   CHECK NOTIFICATION SUPPORT
   ========================================================= */

if (
    !("Notification" in window)
) {

    notifyButton.disabled = true;

    notifyButton.querySelector("span").textContent =
        "NOT SUPPORTED";

}


/* =========================================================
   NOTIFY CLICK
   ========================================================= */

notifyButton.addEventListener(
    "click",
    async () => {

        if (
            !("Notification" in window)
        ) {
            return;
        }


        /* ---------------------------------------------
           ALREADY ENABLED
           --------------------------------------------- */

        if (
            Notification.permission === "granted"
        ) {

            notifyButton.classList.add(
                "is-enabled"
            );

            notifyButton.querySelector("span")
                .textContent =
                "ENABLED";

            return;

        }


        /* ---------------------------------------------
           REQUEST PERMISSION
           --------------------------------------------- */

        const permission =
            await Notification.requestPermission();


        if (
            permission === "granted"
        ) {

            savedNotifyCount++;

            localStorage.setItem(
                "pewjayNotifyCount",
                savedNotifyCount
            );


            notifyCount.textContent =
                savedNotifyCount;


            notifyButton.classList.add(
                "is-enabled"
            );


            notifyButton.querySelector("span")
                .textContent =
                "ENABLED";


            /* -----------------------------------------
               TEST NOTIFICATION
               ----------------------------------------- */

            new Notification(
                "PewJay Official",
                {
                    body:
                        "Notifications are enabled for the website opening.",
                    icon:
                        "images/logo/favicon.png"
                }
            );

        }

    }
);


/* =========================================================
   RESTORE BUTTON STATE
   ========================================================= */

if (
    "Notification" in window &&
    Notification.permission === "granted"
) {

    notifyButton.classList.add(
        "is-enabled"
    );

    notifyButton.querySelector("span")
        .textContent =
        "ENABLED";

}


/* =========================================================
   GOOGLE CALENDAR
   ========================================================= */

const calendarButton =
    document.getElementById(
        "calendar-button"
    );


/* =========================================================
   EVENT INFORMATION
   ========================================================= */

const eventTitle =
    "PewJay Official Website Opening";

const eventDescription =
    "The official PewJay Official website is opening. " +
    "Explore digital art, sketching, animation, " +
    "livestreams, world tour projects, fandoms, " +
    "posters, events, and more.";

const eventLocation =
    "PewJay Official Website";


/* =========================================================
   GOOGLE CALENDAR DATE
   ========================================================= */

/*
   Google Calendar format:

   YYYYMMDDTHHMMSSZ
*/

const startDate =
    "20260824T000000Z";

const endDate =
    "20260824T010000Z";


/* =========================================================
   CALENDAR URL
   ========================================================= */

const calendarURL =
    "https://calendar.google.com/calendar/render" +
    "?action=TEMPLATE" +
    "&text=" +
    encodeURIComponent(eventTitle) +
    "&dates=" +
    startDate +
    "/" +
    endDate +
    "&details=" +
    encodeURIComponent(eventDescription) +
    "&location=" +
    encodeURIComponent(eventLocation);


/* =========================================================
   SET CALENDAR LINK
   ========================================================= */

calendarButton.href =
    calendarURL;