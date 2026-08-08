const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("active");

});

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        hamburger.classList.remove("active");

    });

});

document.addEventListener("click", (e) => {

    if (
        !mobileMenu.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {

        mobileMenu.classList.remove("active");
        hamburger.classList.remove("active");

    }

});