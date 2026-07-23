console.log("hello javascript");

const slide = document.querySelectorAll(".slide");
let currentSlide = 0;
function nextSlide(){
    slide[currentSlide].classList.remove("active");
    currentSlide++;

    if(currentSlide === slide.length){
        currentSlide = 0;
    }

    slide[currentSlide].classList.add("active");

    }

    setInterval(nextSlide, 4000);

 const reviews = document.querySelectorAll(".review");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showReview(index){

    reviews.forEach(review => review.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    reviews[index].classList.add("active");
    dots[index].classList.add("active");
}

setInterval(() => {

    current++;

    if(current >= reviews.length){
        current = 0;
    }

    showReview(current);

}, 4000);

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current=index;

        showReview(current);

    });

});