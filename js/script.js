function updateNavDate(){

    const navDate=document.getElementById("navDate");

    if(!navDate) return;

    const now=new Date();

    const options={

        month:"short",

        day:"numeric",

        year:"numeric"

    };

    navDate.textContent=
    now.toLocaleDateString("en-PH",options);

}

updateNavDate();

// Smooth Reveal Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

/* ===========================
   5-Second Loading Screen
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1800);

});

/* =====================================
   Scroll Progress
===================================== */

const progress=document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

    const total=document.documentElement.scrollHeight-window.innerHeight;

    const progressWidth=(window.pageYOffset/total)*100;

    progress.style.width=progressWidth+"%";

});

/* =====================================
   Back To Top
===================================== */

const topButton=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};











