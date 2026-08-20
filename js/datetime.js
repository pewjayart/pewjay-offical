/* =========================================================
   PEWJAY OFFICIAL
   DATETIME.JS
   Navigation Date & Clock
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const monthElement =
        document.getElementById("nav-month");

    const dateElement =
        document.getElementById("nav-date");

    const dayElement =
        document.getElementById("nav-day");

    const clockElement =
        document.getElementById("nav-clock");


    /* =====================================================
       CHECK ELEMENTS
       ===================================================== */

    if (
        !monthElement ||
        !dateElement ||
        !dayElement ||
        !clockElement
    ) {
        console.warn(
            "Date/time navigation elements were not found."
        );

        return;
    }


    /* =====================================================
       UPDATE DATE & TIME
       ===================================================== */

    function updateDateTime() {

        const now = new Date();


        /* =================================================
           MONTH
           Example: AUG
           ================================================= */

        const month =
            now.toLocaleDateString(
                "en-US",
                {
                    month: "long"
                }
            ).toUpperCase();


        /* =================================================
           DATE
           Example: 10
           ================================================= */

        const date =
            String(
                now.getDate()
            ).padStart(2, "0");


        /* =================================================
           DAY
           Example: MONDAY
           ================================================= */

        const day =
            now.toLocaleDateString(
                "en-US",
                {
                    weekday: "short"
                }
            ).toUpperCase();


        /* =================================================
            CLOCK
            Example: 10:30:45 AM
            ================================================= */

            const clock = now.toLocaleTimeString(
                "en-US",
                {
                    hour: "numeric",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                    timeZone: "Asia/Manila"
                }
            );


        /* =================================================
           UPDATE HTML
           ================================================= */

        monthElement.textContent =
            month;

        dateElement.textContent =
            date;

        dayElement.textContent =
            day;

        clockElement.textContent =
            clock;

    }


    /* =====================================================
       FIRST UPDATE
       ===================================================== */

    updateDateTime();


    /* =====================================================
       UPDATE EVERY SECOND
       ================================================= */

    setInterval(
        updateDateTime,
        1000
    );

});