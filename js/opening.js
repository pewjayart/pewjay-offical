/* =========================================================
   PEWJAY OFFICIAL
   OPENING.JS
   Cinematic Opening Countdown
   Notify Voters + Google Calendar
   ========================================================= */


/* =========================================================
   COUNTDOWN SETTINGS
   ========================================================= */

const TARGET_DATE =
    new Date("August 24, 2026 12:00:00").getTime();


/*
 * Home page filename
 */

const HOME_PAGE =
    "home.html";


/* =========================================================
   COUNTDOWN ELEMENTS
   ========================================================= */

const daysElement =
    document.getElementById(
        "opening-days"
    );

const hoursElement =
    document.getElementById(
        "opening-hours"
    );

const minutesElement =
    document.getElementById(
        "opening-minutes"
    );

const secondsElement =
    document.getElementById(
        "opening-seconds"
    );

const progressBar =
    document.getElementById(
        "opening-progress-bar"
    );

const statusElement =
    document.getElementById(
        "opening-status"
    );


/* =========================================================
   PREVIOUS COUNTDOWN VALUES
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
   ANIMATE COUNTDOWN NUMBER
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
     * Don't restart animation
     * if the value has not changed.
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
     * Remove previous animation.
     */

    element.classList.remove(
        "slide-down"
    );


    /*
     * Force browser reflow.
     * Allows animation to restart.
     */

    void element.offsetWidth;


    /*
     * Change number.
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
   UPDATE PROGRESS BAR
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
   UPDATE COUNTDOWN STATUS
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
        TARGET_DATE -
        now;


    /* =====================================================
       COUNTDOWN FINISHED
       ===================================================== */

    if (
        distance <= 0
    ) {

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
         * Automatic redirect is OFF.
         *
         * If you want the website to
         * automatically open home.html,
         * remove the // below.
         */

        // openWebsite();

        return;

    }


    /* =====================================================
       CALCULATE DAYS
       ===================================================== */

    const days =
        Math.floor(
            distance /
            (
                1000 *
                60 *
                60 *
                24
            )
        );


    /* =====================================================
       CALCULATE HOURS
       ===================================================== */

    const hours =
        Math.floor(
            (
                distance %
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            ) /
            (
                1000 *
                60 *
                60
            )
        );


    /* =====================================================
       CALCULATE MINUTES
       ===================================================== */

    const minutes =
        Math.floor(
            (
                distance %
                (
                    1000 *
                    60 *
                    60
                )
            ) /
            (
                1000 *
                60
            )
        );


    /* =====================================================
       CALCULATE SECONDS
       ===================================================== */

    const seconds =
        Math.floor(
            (
                distance %
                (
                    1000 *
                    60
                )
            ) /
            1000
        );


    /* =====================================================
       DISPLAY COUNTDOWN
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
       UPDATE STATUS
       ===================================================== */

    updateStatus(
        days
    );


    /* =====================================================
       UPDATE PROGRESS
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

    setTimeout(
        () => {

            window.location.href =
                HOME_PAGE;

        },
        800
    );

}


/* =========================================================
   START COUNTDOWN
   ========================================================= */

function startCountdown() {

    updateCountdown();


    setInterval(
        () => {

            updateCountdown();

        },
        1000
    );

}


/* =========================================================
   NOTIFY VOTERS
   ========================================================= */


/*
 * Button
 */

const notifyButton =
    document.getElementById(
        "notify-button"
    );


/*
 * Voter count
 */

const notifyCount =
    document.getElementById(
        "notify-count"
    );


/* =========================================================
   LOAD SAVED VOTER COUNT
   ========================================================= */


/*
 * NOTE:
 *
 * localStorage is only stored on the
 * current browser/device.
 *
 * It is NOT a global website database.
 */

let savedNotifyCount =
    Number(
        localStorage.getItem(
            "pewjayNotifyCount"
        )
    ) || 0;


/* =========================================================
   DISPLAY VOTER COUNT
   ========================================================= */

if (notifyCount) {

    notifyCount.textContent =
        savedNotifyCount;

}


/* =========================================================
   CHECK IF THIS USER ALREADY VOTED
   ========================================================= */

const hasVoted =
    localStorage.getItem(
        "pewjayNotifyVoted"
    ) === "true";


/* =========================================================
   NOTIFICATION SUPPORT
   ========================================================= */

if (
    notifyButton &&
    !("Notification" in window)
) {

    notifyButton.disabled =
        true;


    const buttonText =
        notifyButton.querySelector(
            "span"
        );


    if (buttonText) {

        buttonText.textContent =
            "NOT SUPPORTED";

    }

}


/* =========================================================
   RESTORE VOTER BUTTON
   ========================================================= */

if (
    notifyButton &&
    hasVoted
) {

    notifyButton.classList.add(
        "is-enabled"
    );


    const buttonText =
        notifyButton.querySelector(
            "span"
        );


    if (buttonText) {

        buttonText.textContent =
            "NOTIFIED";

    }

}


/* =========================================================
   NOTIFY BUTTON CLICK
   ========================================================= */

if (notifyButton) {

    notifyButton.addEventListener(
        "click",
        async () => {


            /* =============================================
               ALREADY VOTED
               ============================================= */

            const alreadyVoted =
                localStorage.getItem(
                    "pewjayNotifyVoted"
                ) === "true";


            if (alreadyVoted) {

                return;

            }


            /* =============================================
               CHECK NOTIFICATION SUPPORT
               ============================================= */

            if (
                !("Notification" in window)
            ) {

                return;

            }


            /* =============================================
               CURRENT PERMISSION
               ============================================= */

            let permission =
                Notification.permission;


            /* =============================================
               REQUEST PERMISSION
               ============================================= */

            if (
                permission !== "granted"
            ) {

                permission =
                    await Notification.requestPermission();

            }


            /* =============================================
               SUCCESS
               ============================================= */

            if (
                permission === "granted"
            ) {


                /* -----------------------------------------
                   SAVE VOTER
                   ----------------------------------------- */

                localStorage.setItem(
                    "pewjayNotifyVoted",
                    "true"
                );


                /* -----------------------------------------
                   ADD ONE VOTE
                   ----------------------------------------- */

                savedNotifyCount++;


                /* -----------------------------------------
                   SAVE COUNT
                   ----------------------------------------- */

                localStorage.setItem(
                    "pewjayNotifyCount",
                    savedNotifyCount
                );


                /* -----------------------------------------
                   UPDATE COUNT ON SCREEN
                   ----------------------------------------- */

                if (notifyCount) {

                    notifyCount.textContent =
                        savedNotifyCount;

                }


                /* -----------------------------------------
                   BUTTON STATE
                   ----------------------------------------- */

                notifyButton.classList.add(
                    "is-enabled"
                );


                const buttonText =
                    notifyButton.querySelector(
                        "span"
                    );


                if (buttonText) {

                    buttonText.textContent =
                        "NOTIFIED";

                }


                /* -----------------------------------------
                   CONFIRMATION NOTIFICATION
                   ----------------------------------------- */

                try {

                    new Notification(
                        "PewJay Official",
                        {

                            body:
                                "You're now subscribed to PewJay Official website notifications.",

                            icon:
                                "images/logo/favicon.png"

                        }
                    );

                }
                catch (error) {

                    console.log(
                        "Notification created."
                    );

                }

            }

        }
    );

}


/* =========================================================
   GOOGLE CALENDAR
   ========================================================= */


/*
 * Calendar button
 */

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
 * Google Calendar format:
 *
 * YYYYMMDDTHHMMSSZ
 *
 * August 24, 2026
 */

const startDate =
    "20260824T000000Z";


const endDate =
    "20260824T010000Z";


/* =========================================================
   GOOGLE CALENDAR URL
   ========================================================= */

const calendarURL =
    "https://calendar.google.com/calendar/render" +
    "?action=TEMPLATE" +
    "&text=" +
    encodeURIComponent(
        eventTitle
    ) +
    "&dates=" +
    startDate +
    "/" +
    endDate +
    "&details=" +
    encodeURIComponent(
        eventDescription
    ) +
    "&location=" +
    encodeURIComponent(
        eventLocation
    );


/* =========================================================
   SET GOOGLE CALENDAR LINK
   ========================================================= */

if (calendarButton) {

    calendarButton.href =
        calendarURL;

    calendarButton.target =
        "_blank";

    calendarButton.rel =
        "noopener noreferrer";

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