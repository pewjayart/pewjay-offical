/* =========================================================
   PEWJAY OFFICIAL
   SLIDER.JS
   Home Portfolio Playlist Slider
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const sliders = document.querySelectorAll(".playlist");

    if (!sliders.length) {
        return;
    }


    sliders.forEach((slider) => {

        const track =
            slider.querySelector(".playlist-track");

        const container =
            slider.closest(".playlist-container");

        if (!track || !container) {
            return;
        }


        const previousButton =
            container.querySelector(".slider-prev");

        const nextButton =
            container.querySelector(".slider-next");

        if (!previousButton || !nextButton) {
            return;
        }


        let currentIndex = 0;


        /* =====================================================
           RESPONSIVE NUMBER OF VISIBLE IMAGES
        ===================================================== */

        function getVisibleSlides() {

            const width = window.innerWidth;

            if (width <= 575) {
                return 1;
            }

            if (width <= 767) {
                return 1;
            }

            if (width <= 991) {
                return 2;
            }

            if (width <= 1399) {
                return 3;
            }

            return 4;
        }


        /* =====================================================
           GET ALL IMAGES
        ===================================================== */

        function getImages() {

            return track.querySelectorAll("img");

        }


        /* =====================================================
           GET MAXIMUM SLIDE INDEX
        ===================================================== */

        function getMaxIndex() {

            const totalImages =
                getImages().length;

            const visibleSlides =
                getVisibleSlides();

            return Math.max(
                0,
                totalImages - visibleSlides
            );
        }


        /* =====================================================
           GET IMAGE WIDTH + GAP
        ===================================================== */

        function getStepSize() {

            const images =
                getImages();

            if (!images.length) {
                return 0;
            }

            const imageWidth =
                images[0].getBoundingClientRect().width;


            const style =
                window.getComputedStyle(track);


            const gap =
                parseFloat(style.gap) || 0;


            return imageWidth + gap;
        }


        /* =====================================================
           UPDATE SLIDER
        ===================================================== */

        function updateSlider() {

            const maxIndex =
                getMaxIndex();


            /* Prevent invalid position */

            if (currentIndex < 0) {
                currentIndex = 0;
            }

            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }


            const step =
                getStepSize();


            const movement =
                currentIndex * step;


            track.style.transform =
                `translate3d(-${movement}px, 0, 0)`;


            updateButtons(maxIndex);

        }


        /* =====================================================
           UPDATE ARROW STATES
        ===================================================== */

        function updateButtons(maxIndex) {

            /* Previous */

            previousButton.disabled =
                currentIndex <= 0;


            /* Next */

            nextButton.disabled =
                currentIndex >= maxIndex;


            /* Visual state */

            previousButton.classList.toggle(
                "disabled",
                currentIndex <= 0
            );

            nextButton.classList.toggle(
                "disabled",
                currentIndex >= maxIndex
            );

        }


        /* =====================================================
           NEXT BUTTON
        ===================================================== */

        nextButton.addEventListener(
            "click",
            () => {

                const maxIndex =
                    getMaxIndex();


                if (
                    currentIndex <
                    maxIndex
                ) {

                    currentIndex++;

                    updateSlider();

                }

            }
        );


        /* =====================================================
           PREVIOUS BUTTON
        ===================================================== */

        previousButton.addEventListener(
            "click",
            () => {

                if (currentIndex > 0) {

                    currentIndex--;

                    updateSlider();

                }

            }
        );


        /* =====================================================
           KEYBOARD SUPPORT
        ===================================================== */

        container.addEventListener(
            "keydown",
            (event) => {

                if (event.key === "ArrowLeft") {

                    event.preventDefault();

                    if (currentIndex > 0) {

                        currentIndex--;

                        updateSlider();

                    }

                }


                if (event.key === "ArrowRight") {

                    event.preventDefault();

                    const maxIndex =
                        getMaxIndex();


                    if (
                        currentIndex <
                        maxIndex
                    ) {

                        currentIndex++;

                        updateSlider();

                    }

                }

            }
        );


        /* =====================================================
           TOUCH / SWIPE SUPPORT
        ===================================================== */

        let touchStartX = 0;
        let touchEndX = 0;


        slider.addEventListener(
            "touchstart",
            (event) => {

                touchStartX =
                    event.changedTouches[0].screenX;

            },
            {
                passive: true
            }
        );


        slider.addEventListener(
            "touchend",
            (event) => {

                touchEndX =
                    event.changedTouches[0].screenX;


                handleSwipe();

            },
            {
                passive: true
            }
        );


        function handleSwipe() {

            const swipeDistance =
                touchEndX - touchStartX;


            const minimumSwipe =
                50;


            /* Swipe left */

            if (
                swipeDistance <
                -minimumSwipe
            ) {

                const maxIndex =
                    getMaxIndex();


                if (
                    currentIndex <
                    maxIndex
                ) {

                    currentIndex++;

                    updateSlider();

                }

            }


            /* Swipe right */

            if (
                swipeDistance >
                minimumSwipe
            ) {

                if (currentIndex > 0) {

                    currentIndex--;

                    updateSlider();

                }

            }

        }


        /* =====================================================
           WINDOW RESIZE
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

                            updateSlider();

                        },
                        150
                    );

            }
        );


        /* =====================================================
           IMAGE LOAD
           Recalculate after images are loaded.
        ===================================================== */

        getImages().forEach((image) => {

            if (!image.complete) {

                image.addEventListener(
                    "load",
                    () => {
                        updateSlider();
                    },
                    {
                        once: true
                    }
                );

            }

        });


        /* =====================================================
           INITIALIZE
        ===================================================== */

        updateSlider();

    });

});