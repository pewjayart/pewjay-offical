/* =========================================================
   PEWJAY OFFICIAL
   EVENTS.JS
   Event Countdown System
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const eventCards =
        document.querySelectorAll(
            ".event-card[data-event-date]"
        );


    if (!eventCards.length) {
        return;
    }


    /* =====================================================
       FORMAT NUMBER
    ===================================================== */

    function formatNumber(number, digits = 2) {

        return String(number)
            .padStart(digits, "0");

    }


    /* =====================================================
       UPDATE SINGLE EVENT
    ===================================================== */

    function updateEvent(card) {

        const dateString =
            card.dataset.eventDate;


        if (!dateString) {
            return;
        }


        const eventDate =
            new Date(dateString);


        if (Number.isNaN(eventDate.getTime())) {

            console.warn(
                "Invalid event date:",
                dateString
            );

            return;
        }


        const now =
            new Date();


        let difference =
            eventDate.getTime() -
            now.getTime();


        /* =================================================
           EVENT ALREADY STARTED
        ================================================= */

        if (difference <= 0) {

            difference = 0;

            card.classList.add(
                "event-finished"
            );

        } else {

            card.classList.remove(
                "event-finished"
            );

        }


        /* =================================================
           CALCULATE TIME
        ================================================= */

        const totalSeconds =
            Math.floor(
                difference / 1000
            );


        const days =
            Math.floor(
                totalSeconds /
                86400
            );


        const hours =
            Math.floor(
                (totalSeconds % 86400) /
                3600
            );


        const minutes =
            Math.floor(
                (totalSeconds % 3600) /
                60
            );


        const seconds =
            totalSeconds % 60;


        /* =================================================
           FIND COUNTDOWN ELEMENTS
        ================================================= */

        const daysElement =
            card.querySelector(
                ".countdown-days"
            );


        const hoursElement =
            card.querySelector(
                ".countdown-hours"
            );


        const minutesElement =
            card.querySelector(
                ".countdown-minutes"
            );


        const secondsElement =
            card.querySelector(
                ".countdown-seconds"
            );


        /* =================================================
           UPDATE NUMBERS
        ================================================= */

        if (daysElement) {

            daysElement.textContent =
                formatNumber(
                    days,
                    3
                );

        }


        if (hoursElement) {

            hoursElement.textContent =
                formatNumber(
                    hours
                );

        }


        if (minutesElement) {

            minutesElement.textContent =
                formatNumber(
                    minutes
                );

        }


        if (secondsElement) {

            secondsElement.textContent =
                formatNumber(
                    seconds
                );

        }


        /* =================================================
           UPDATE ACCESSIBILITY
        ================================================= */

        card.setAttribute(
            "aria-label",
            `Event countdown: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
        );

    }


    /* =====================================================
       UPDATE ALL EVENTS
    ===================================================== */

    function updateAllEvents() {

        eventCards.forEach(
            (card) => {

                updateEvent(card);

            }
        );

    }


    /* =====================================================
       INITIAL UPDATE
    ===================================================== */

    updateAllEvents();


    /* =====================================================
       UPDATE EVERY SECOND
    ================================================= */

    const countdownInterval =
        setInterval(
            updateAllEvents,
            1000
        );


    /* =====================================================
       CLEANUP
       Stop timer if the page is hidden for a long time.
    ================================================= */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden
            ) {

                /*
                 * The interval continues normally,
                 * but the next update will recalculate
                 * the exact remaining time.
                 */

                return;

            }

            updateAllEvents();

        }
    );


});