/* =========================================================
   PEWJAY OFFICIAL
   TIMELINE.JS
   CINEMATIC INTERACTIVE TIMELINE
   ========================================================= */


/* =========================================================
   TIMELINE EVENTS
   ========================================================= */

const timelineEvents = [

    /* =====================================================
       2016
       ===================================================== */

    {
        year: "2016",
        date: "APRIL 17, 2016",
        title: "SMURF",
        description: "FIRST FANDOM",
        image: "images/timeline/smurfs.jpg"
    },


    /* =====================================================
       2019
       ===================================================== */

    {
        year: "2019",
        date: "SEPTEMBER 3, 2019",
        title: "SMURF",
        description: "END FANDOM",
        image: "images/timeline/smurfs-end.jpg"
    },


    /* =====================================================
       2021
       ===================================================== */

    {
        year: "2021",
        date: "AUGUST 3, 2021",
        title: "DREAMWORKS TROLLS",
        description: "FIRST BEGIN FANDOM",
        image: "images/timeline/trolls.jpg"
    },

    {
        year: "2021",
        date: "JUNE 5, 2021",
        title: "MOVIEFULLCLIPS",
        description: "FIRST YOUTUBE CHANNEL",
        image: "images/timeline/mfc.jpg"
    },


    /* =====================================================
       2022
       ===================================================== */

    {
        year: "2022",
        date: "MARCH 31, 2022",
        title: "MOVIEFULLCLIPS",
        description:
            "END OF CHANNEL — COPYRIGHTED VIDEOS WERE UPLOADED, RESULTING IN THE CHANNEL BEING BLOCKED.",
        image: "images/timeline/mfc-end.jpg"
    },

    {
        year: "2022",
        date: "JUNE 8, 2022",
        title: "PEWJAY OFFICIAL",
        description: "OFFICIALLY BEGINS",
        image: "images/timeline/pewjay.jpg"
    },

    {
        year: "2022",
        date: "SEPTEMBER 21, 2022",
        title: "ANGRY BIRDS 2",
        description: "AS GAMER",
        image: "images/timeline/angry-birds-2-2022.jpg"
    },


    /* =====================================================
       2023
       ===================================================== */

    {
        year: "2023",
        date: "JANUARY 7, 2023",
        title: "PEWJAY OFFICIAL",
        description:
            "OFFICIAL BREAK TILL MARCH 2024",
        image: "images/timeline/pewjay-end.jpg"
    },


    /* =====================================================
       2024
       ===================================================== */

    {
        year: "2024",
        date: "MARCH 20, 2024",
        title: "PEWJAY OFFICIAL",
        description: "RESUME",
        image: "images/timeline/pewjay-2024.jpg"
    },

    {
        year: "2024",
        date: "APRIL 28, 2024",
        title: "FIRST DIGITAL ARTIST",
        description: "FIRST DIGITAL ARTWORK ERA",
        image: "images/timeline/first-digital.jpg"
    },

    {
        year: "2024",
        date: "SEPTEMBER 28, 2024",
        title: "BOTTLE",
        description: "FIRST ANIMATED SERIES / EPISODE 1",
        image: "images/timeline/bottle.jpg"
    },

    {
        year: "2024",
        date: "DECEMBER 31, 2024",
        title: "NEW YEAR 2025",
        description: "FIRST TIME LIVESTREAM",
        image: "images/timeline/ny2025.jpg"
    },


    /* =====================================================
       2025
       ===================================================== */

    {
        year: "2025",
        date: "FEBRUARY 14, 2025",
        title: "FOREVER TO BE LOVED",
        description: "ANIMATED SERIES / EPISODE 2",
        image: "images/timeline/forever-to-be-loved.jpg"
    },

    {
        year: "2025",
        date: "FEBRUARY 25, 2025",
        title: "17TH BIRTHDAY",
        description: "TURNS 17TH Y.O.",
        image: "images/timeline/17th.jpg"
    },

    {
        year: "2025",
        date: "MARCH 11, 2025",
        title: "DIGITAL ART STREAMERS",
        description: "DIGITAL ART STREAMERS",
        image: "images/timeline/digital-art-streamers.jpg"
    },

    {
        year: "2025",
        date: "MARCH 21, 2025",
        title: "METRO TOUR",
        description: "FIRST TIME AT METRO TOUR — FIELD TRIP 2025",
        image: "images/timeline/metro-tour.jpg"
    },

    {
        year: "2025",
        date: "JUNE 8, 2025",
        title: "PEWJAY ANNIVERSARY",
        description: "3RD ANNIVERSARY",
        image: "images/timeline/3rd-anniversary.jpg"
    },

    {
        year: "2025",
        date: "OCTOBER 31 – NOVEMBER 1, 2025",
        title: "SLENDRINA HAUNTED CONNECTION",
        description: "LIVE GAMER",
        image: "images/timeline/slendrina-haunted-connection.jpg"
    },

    {
        year: "2025",
        date: "NOVEMBER 18, 2025",
        title: "FOREVER TO BE LOVED 2",
        description: "ANIMATED SERIES / EPISODE 3",
        image: "images/timeline/forever-to-be-loved-2.jpg"
    },


    /* =====================================================
       2026
       ===================================================== */

    {
        year: "2026",
        date: "JANUARY 17, 2026",
        title: "MALVAR TO AGILA TOUR",
        description: "LIVE / FIELD TRIP 2026",
        image: "images/timeline/malvar-to-agila-tour.jpg"
    },

    {
        year: "2026",
        date: "FEBRUARY 25, 2026",
        title: "18TH BIRTHDAY",
        description:
            "TURNS 18TH / NEW PIXAR ELEMENTAL FANDOM",
        image: "images/timeline/18th.jpg"
    },

    {
        year: "2026",
        date: "MARCH 28, 2026",
        title: "GRADUATION",
        description: "GRADUATION IN SENIOR HIGH",
        image: "images/timeline/graduation.jpg"
    },

    {
        year: "2026",
        date: "JUNE 1, 2026",
        title: "1,000 SUBSCRIBERS",
        description: "PEWJAY CHANNEL",
        image: "images/timeline/1000-subscribers.jpg"
    },

    {
        year: "2026",
        date: "JULY 13, 2026",
        title: "PEWJAY WEBSITES",
        description: "FIRST CREATED PEWJAY WEBSITES",
        image: "images/timeline/first-websites.jpg"
    }

];


/* =========================================================
   ELEMENTS
   ========================================================= */

const timelineBackground =
    document.getElementById("timeline-background");

const timelineEvent =
    document.getElementById("timeline-event");

const timelineDate =
    document.getElementById("timeline-date");

const timelineTitle =
    document.getElementById("timeline-title");

const timelineDescription =
    document.getElementById("timeline-description");

const timelineProgress =
    document.getElementById("timeline-progress-bar");

const timelineCurrent =
    document.getElementById("timeline-current");

const timelineTotal =
    document.getElementById("timeline-total");

const timelineYears =
    document.querySelectorAll(".timeline-year");


/* =========================================================
   CURRENT EVENT
   ========================================================= */

let currentEvent = 0;


/* =========================================================
   TOTAL EVENTS
   ========================================================= */

if (timelineTotal) {

    timelineTotal.textContent =
        String(timelineEvents.length).padStart(2, "0");

}


/* =========================================================
   PRELOAD IMAGES
   ========================================================= */

timelineEvents.forEach(event => {

    const image = new Image();

    image.src = event.image;

});


/* =========================================================
   GET EVENT
   ========================================================= */

function getEvent(index) {

    return timelineEvents[index];

}


/* =========================================================
   UPDATE YEAR BUTTON
   ========================================================= */

function updateYearButton(year) {

    timelineYears.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.year === year
        );

    });

}


/* =========================================================
   UPDATE PROGRESS
   ========================================================= */

function updateProgress(index) {

    if (!timelineProgress) {
        return;
    }

    const total =
        timelineEvents.length;

    const progress =
        ((index + 1) / total) * 100;

    timelineProgress.style.width =
        `${progress}%`;

}


/* =========================================================
   UPDATE COUNTER
   ========================================================= */

function updateCounter(index) {

    if (!timelineCurrent) {
        return;
    }

    timelineCurrent.textContent =
        String(index + 1).padStart(2, "0");

}


/* =========================================================
   CHANGE BACKGROUND
   ========================================================= */

function changeBackground(imagePath) {

    if (!timelineBackground) {
        return;
    }


    timelineBackground.classList.add("change");


    setTimeout(() => {

        timelineBackground.style.backgroundImage =
            `url("${imagePath}")`;

        timelineBackground.classList.remove("change");

    }, 280);

}


/* =========================================================
   CHANGE EVENT CONTENT
   ========================================================= */

function changeEventContent(event) {

    if (
        !timelineEvent ||
        !timelineDate ||
        !timelineTitle ||
        !timelineDescription
    ) {

        return;

    }


    timelineEvent.classList.add("change");


    setTimeout(() => {

        timelineDate.textContent =
            event.date;

        timelineTitle.textContent =
            event.title;

        timelineDescription.textContent =
            event.description;


        timelineEvent.classList.remove("change");

    }, 250);

}


/* =========================================================
   SHOW EVENT
   ========================================================= */

function showEvent(index) {

    if (
        index < 0 ||
        index >= timelineEvents.length
    ) {

        return;

    }


    const event =
        getEvent(index);


    currentEvent =
        index;


    changeBackground(
        event.image
    );


    changeEventContent(
        event
    );


    updateYearButton(
        event.year
    );


    updateProgress(
        index
    );


    updateCounter(
        index
    );

}


/* =========================================================
   YEAR BUTTON CLICK
   ========================================================= */

timelineYears.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const year =
                button.dataset.year;


            /*
             * Find the first event
             * belonging to this year.
             */

            const eventIndex =
                timelineEvents.findIndex(
                    event =>
                        event.year === year
                );


            if (eventIndex !== -1) {

                showEvent(
                    eventIndex
                );

            }

        }
    );

});


/* =========================================================
   KEYBOARD NAVIGATION
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "ArrowRight") {

            const next =
                currentEvent + 1;

            if (
                next <
                timelineEvents.length
            ) {

                showEvent(next);

            }

        }


        if (event.key === "ArrowLeft") {

            const previous =
                currentEvent - 1;

            if (
                previous >= 0
            ) {

                showEvent(previous);

            }

        }

    }
);


/* =========================================================
   SWIPE NAVIGATION
   ========================================================= */

let touchStartX = 0;
let touchEndX = 0;


function handleSwipe() {

    const difference =
        touchStartX - touchEndX;


    /*
     * Minimum swipe distance
     */

    if (
        Math.abs(difference) < 50
    ) {

        return;

    }


    if (difference > 0) {

        /*
         * Swipe left
         * → next event
         */

        const next =
            currentEvent + 1;

        if (
            next <
            timelineEvents.length
        ) {

            showEvent(next);

        }

    } else {

        /*
         * Swipe right
         * → previous event
         */

        const previous =
            currentEvent - 1;

        if (
            previous >= 0
        ) {

            showEvent(previous);

        }

    }

}


if (timelineBackground) {

    timelineBackground.addEventListener(
        "touchstart",
        event => {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        {
            passive: true
        }
    );


    timelineBackground.addEventListener(
        "touchend",
        event => {

            touchEndX =
                event.changedTouches[0].screenX;

            handleSwipe();

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   MOUSE WHEEL NAVIGATION
   ========================================================= */

let wheelLocked = false;


document.addEventListener(
    "wheel",
    event => {

        if (wheelLocked) {
            return;
        }


        /*
         * Ignore tiny wheel movements
         */

        if (
            Math.abs(event.deltaY) < 20
        ) {

            return;

        }


        wheelLocked = true;


        if (event.deltaY > 0) {

            const next =
                currentEvent + 1;

            if (
                next <
                timelineEvents.length
            ) {

                showEvent(next);

            }

        } else {

            const previous =
                currentEvent - 1;

            if (
                previous >= 0
            ) {

                showEvent(previous);

            }

        }


        setTimeout(
            () => {

                wheelLocked = false;

            },
            650
        );

    },
    {
        passive: true
    }
);


/* =========================================================
   AUTO CENTER ACTIVE YEAR ON MOBILE
   ========================================================= */

function centerActiveYear() {

    const active =
        document.querySelector(
            ".timeline-year.active"
        );


    if (
        !active ||
        window.innerWidth > 600
    ) {

        return;

    }


    active.scrollIntoView({

        behavior: "smooth",

        block: "nearest",

        inline: "center"

    });

}


/* =========================================================
   UPDATED YEAR BUTTON
   ========================================================= */

const originalUpdateYearButton =
    updateYearButton;


/*
 * Refresh mobile position after
 * selecting another year.
 */

function refreshYearPosition() {

    setTimeout(
        centerActiveYear,
        150
    );

}


/* =========================================================
   INITIALIZE
   ========================================================= */

function initializeTimeline() {

    if (
        !timelineEvents.length
    ) {

        return;

    }


    showEvent(0);

}


/* =========================================================
   START
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeTimeline
    );

} else {

    initializeTimeline();

}
