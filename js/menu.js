/* =========================================================
   PEWJAY OFFICIAL
   MENU.JS
   Mobile Menu + Active Page Status
   ========================================================= */


/* =========================================================
   ELEMENTS
   ========================================================= */

const menuToggle =
    document.getElementById("menu-toggle");

const mobileMenu =
    document.getElementById("mobile-menu");


/* =========================================================
   MENU LINKS
   ========================================================= */

const menuLinks =
    mobileMenu
        ? mobileMenu.querySelectorAll("a")
        : [];


/* =========================================================
   OPEN / CLOSE MENU
   ========================================================= */

function toggleMenu() {

    if (!menuToggle || !mobileMenu) {
        return;
    }


    const isOpen =
        mobileMenu.classList.toggle("active");


    menuToggle.classList.toggle(
        "active",
        isOpen
    );


    menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
    );


    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close Navigation"
            : "Open Navigation"
    );


    /* Prevent background scrolling */

    document.body.classList.toggle(
        "menu-open",
        isOpen
    );

}


/* =========================================================
   MENU BUTTON
   ========================================================= */

if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        toggleMenu
    );

}


/* =========================================================
   CLOSE MENU WHEN LINK IS CLICKED
   ========================================================= */

menuLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            if (!mobileMenu || !menuToggle) {
                return;
            }


            mobileMenu.classList.remove(
                "active"
            );


            menuToggle.classList.remove(
                "active"
            );


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            menuToggle.setAttribute(
                "aria-label",
                "Open Navigation"
            );


            document.body.classList.remove(
                "menu-open"
            );

        }
    );

});


/* =========================================================
   ACTIVE PAGE
   ========================================================= */

function setActivePage() {

    const currentPath =
        window.location.pathname;


    let currentPage =
        currentPath
            .split("/")
            .pop()
            .toLowerCase();


    /*
     * If the URL has no HTML filename,
     * treat it as home.html.
     */

    if (
        currentPage === "" ||
        currentPage === "/"
    ) {

        currentPage =
            "home.html";

    }


    menuLinks.forEach(link => {

        const linkURL =
            new URL(
                link.href,
                window.location.href
            );


        let linkPage =
            linkURL.pathname
                .split("/")
                .pop()
                .toLowerCase();


        if (
            linkPage === "" ||
            linkPage === "/"
        ) {

            linkPage =
                "home.html";

        }


        /*
         * Remove previous active state
         */

        link.classList.remove(
            "active"
        );


        /*
         * Remove old status
         */

        link.removeAttribute(
            "aria-current"
        );


        /*
         * Add active state
         */

        if (
            linkPage === currentPage
        ) {

            link.classList.add(
                "active"
            );


            link.setAttribute(
                "aria-current",
                "page"
            );

        }

    });

}


/* =========================================================
   RUN ACTIVE PAGE
   ========================================================= */

setActivePage();


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            mobileMenu &&
            mobileMenu.classList.contains("active")
        ) {

            mobileMenu.classList.remove(
                "active"
            );


            menuToggle?.classList.remove(
                "active"
            );


            menuToggle?.setAttribute(
                "aria-expanded",
                "false"
            );


            menuToggle?.setAttribute(
                "aria-label",
                "Open Navigation"
            );


            document.body.classList.remove(
                "menu-open"
            );

        }

    }
);


/* =========================================================
   CLICK OUTSIDE MENU
   ========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !mobileMenu ||
            !menuToggle
        ) {
            return;
        }


        const clickedInsideMenu =
            mobileMenu.contains(
                event.target
            );


        const clickedToggle =
            menuToggle.contains(
                event.target
            );


        if (
            mobileMenu.classList.contains("active") &&
            !clickedInsideMenu &&
            !clickedToggle
        ) {

            mobileMenu.classList.remove(
                "active"
            );


            menuToggle.classList.remove(
                "active"
            );


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            menuToggle.setAttribute(
                "aria-label",
                "Open Navigation"
            );


            document.body.classList.remove(
                "menu-open"
            );

        }

    }
);