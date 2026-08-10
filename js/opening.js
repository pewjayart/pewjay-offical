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
    new Date("August 24, 2026 00:00:00").getTime();


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