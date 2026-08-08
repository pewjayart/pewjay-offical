/* ---------- Gallery Slider ---------- */

document.querySelectorAll(".slider-wrapper").forEach(slider=>{

    const track=slider.querySelector(".gallery-track");
    const next=slider.querySelector(".next");
    const prev=slider.querySelector(".prev");

    const amount=340;

    next.addEventListener("click",()=>{

        track.scrollBy({

            left:amount,
            behavior:"smooth"

        });

    });

    prev.addEventListener("click",()=>{

        track.scrollBy({

            left:-amount,
            behavior:"smooth"

        });

    });

});

/* ---------- Image Lightbox ---------- */

const images=document.querySelectorAll(".gallery-track img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightboxImage");

const closeBtn=document.getElementById("lightboxClose");

const prevBtn=document.getElementById("lightboxPrev");

const nextBtn=document.getElementById("lightboxNext");

let current=0;

function showImage(index){

    current=index;

    lightboxImg.src=images[current].src;

}

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        showImage(index);

        lightbox.classList.add("show");

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");

    }

});

nextBtn.addEventListener("click",()=>{

    current++;

    if(current>=images.length){

        current=0;

    }

    showImage(current);

});

prevBtn.addEventListener("click",()=>{

    current--;

    if(current<0){

        current=images.length-1;

    }

    showImage(current);

});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("show")) return;

    if(e.key==="Escape"){

        lightbox.classList.remove("show");

    }

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});