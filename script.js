 const slides = document.querySelector(".slider").children;
//console.log(slides)
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
index=0;

prev.addEventListener("click", function(){
    console.log("prev click")
})

next.addEventListener("click", function(){
    nextSlide()
})

function nextSlide(){
    if(index === slides.length -1 ){
        index=0;
    }else{
        index++;
    }
    changeSlide();
}

function changeSlide(){
    slides[index].classList.add("active");
}
