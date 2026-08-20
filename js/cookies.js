/* =========================================================
   PEWJAY OFFICIAL
   COOKIES.JS
   STYLE 02
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const cookieCard =
            document.getElementById(
                "cookie-card"
            );

        const acceptButton =
            document.getElementById(
                "cookie-card-accept"
            );

        const closeButton =
            document.getElementById(
                "cookie-card-close"
            );


        /* =================================================
           SAFETY CHECK
           ================================================= */

        if (!cookieCard) {

            return;

        }


        /* =================================================
           CHECK SAVED PREFERENCE
           ================================================= */

        const savedChoice =
            localStorage.getItem(
                "pewjayCookieChoice"
            );


        /* =================================================
           SHOW CARD
           ================================================= */

        if (!savedChoice) {

            setTimeout(
                () => {

                    cookieCard.classList.add(
                        "show"
                    );

                },
                7000
            );

        }


        /* =================================================
           CLOSE CARD
           ================================================= */

        function closeCookies(
            choice
        ) {

            localStorage.setItem(
                "pewjayCookieChoice",
                choice
            );

            cookieCard.classList.remove(
                "show"
            );

        }


        /* =================================================
           ACCEPT
           ================================================= */

        if (acceptButton) {

            acceptButton.addEventListener(
                "click",
                () => {

                    closeCookies(
                        "accepted"
                    );

                }
            );

        }


        /* =================================================
           CLOSE
           ================================================= */

        if (closeButton) {

            closeButton.addEventListener(
                "click",
                () => {

                    closeCookies(
                        "closed"
                    );

                }
            );

        }

    }
);