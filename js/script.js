/* =========================================================
   PEWJAY OFFICIAL
   SCRIPT.JS
   Main JavaScript Controller
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("PewJay Official website loaded.");

    /*
     * Add loaded class after the page is ready.
     * Useful for CSS entrance animations.
     */
    document.body.classList.add("page-loaded");


    /*
     * Prevent broken image layouts.
     */
    const images = document.querySelectorAll("img");

    images.forEach((image) => {

        image.addEventListener("error", () => {

            image.classList.add("image-error");

            console.warn(
                `Image could not be loaded: ${image.src}`
            );

        });

    });


    /*
     * Smooth scrolling for internal links.
     */
    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetID =
                link.getAttribute("href");

            if (
                !targetID ||
                targetID === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetID);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /*
     * Add active section information while scrolling.
     */
    const sections =
        document.querySelectorAll(
            ".portfolio-section"
        );

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "section-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    sections.forEach((section) => {
        observer.observe(section);
    });


    /*
     * Prevent empty social links from jumping
     * to the top of the page.
     */
    const emptyLinks =
        document.querySelectorAll(
            'a[href="#"]'
        );

    emptyLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

        });

    });

});

document.addEventListener("DOMContentLoaded", () => {

    const intro =
        document.getElementById("page-intro");

    if (!intro) return;

    document.body.classList.add("intro-active");

    setTimeout(() => {

        intro.classList.add("intro-hidden");

        document.body.classList.remove("intro-active");

    }, 3000);

});