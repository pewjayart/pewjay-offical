/* =========================================================
   PEWJAY OFFICIAL
   MENU.JS
   Two-Line Hamburger Navigation
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle =
        document.getElementById("menu-toggle");

    const mobileMenu =
        document.getElementById("mobile-menu");


    /* =====================================================
       CHECK ELEMENTS
    ===================================================== */

    if (!menuToggle || !mobileMenu) {
        console.warn(
            "Menu elements were not found."
        );

        return;
    }


    /* =====================================================
       OPEN / CLOSE MENU
    ===================================================== */

    function toggleMenu() {

        const isOpen =
            mobileMenu.classList.toggle("active");


        menuToggle.classList.toggle(
            "active",
            isOpen
        );


        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );


        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

    }


    /* =====================================================
       CLOSE MENU
    ===================================================== */

    function closeMenu() {

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


        document.body.classList.remove(
            "menu-open"
        );

    }


    /* =====================================================
       HAMBURGER CLICK
    ===================================================== */

    menuToggle.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            toggleMenu();

        }
    );


    /* =====================================================
       MENU LINKS
    ===================================================== */

    const menuLinks =
        mobileMenu.querySelectorAll("a");


    menuLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                closeMenu();

            }
        );

    });


    /* =====================================================
       CLICK OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        (event) => {

            const clickedMenu =
                mobileMenu.contains(
                    event.target
                );


            const clickedButton =
                menuToggle.contains(
                    event.target
                );


            if (
                !clickedMenu &&
                !clickedButton
            ) {

                closeMenu();

            }

        }
    );


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                mobileMenu.classList.contains("active")
            ) {

                closeMenu();

                menuToggle.focus();

            }

        }
    );


    /* =====================================================
       CLOSE MENU AFTER RESIZING TO DESKTOP
    ===================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        /*
                         * When screen becomes desktop-sized,
                         * close the mobile navigation.
                         */

                        if (
                            window.innerWidth > 767
                        ) {

                            closeMenu();

                        }

                    },
                    150
                );

        }
    );


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    closeMenu();

});