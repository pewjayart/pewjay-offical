/* ==========================================
   PEWJAY OFFICIAL
   EVENTS.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       LIVE COUNTDOWN
    ========================================== */

    const countdowns = document.querySelectorAll(".countdown");

    function updateCountdowns() {

        const now = new Date().getTime();

        countdowns.forEach(card => {

            const target = new Date(card.dataset.date).getTime();

            const distance = target - now;

            const status = card.closest(".event-card")
                               .querySelector(".event-status");

            if (distance <= 0) {

                card.classList.add("finished");

                if(status){

                    status.className = "event-status live";

                    status.textContent = "LIVE";

                }

                card.querySelector(".days").textContent = "000";

                card.querySelector(".time").textContent = "00:00:00";

                return;

            }

            const days = Math.floor(
                distance / (1000 * 60 * 60 * 24)
            );

            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24))
                / (1000 * 60 * 60)
            );

            const minutes = Math.floor(
                (distance % (1000 * 60 * 60))
                / (1000 * 60)
            );

            const seconds = Math.floor(
                (distance % (1000 * 60))
                / 1000
            );

            card.querySelector(".days").textContent =
                String(days).padStart(3, "0");

            card.querySelector(".time").textContent =
                `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;

        });

    }

    updateCountdowns();

    setInterval(updateCountdowns,1000);



    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const cards = document.querySelectorAll(".event-card");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    cards.forEach(card=>{

        observer.observe(card);

    });



    /* ==========================================
       CARD HOVER EFFECT
    ========================================== */

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transition="0.35s";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transition="0.35s";

        });

    });

});