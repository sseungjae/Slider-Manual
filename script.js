 const slides = document.querySelector(".slider").children;
//console.log(slides)
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
index=0;

prev.addEventListener("click", function(){
    console.log("prev click")
    prevSlide()
})

next.addEventListener("click", function(){
    console.log("next click")
    nextSlide()
})

function prevSlide(){
    if(index === 0){
        index=slides.length - 1;
    }else{
        index--;
    }
    changeSlide();
}

function nextSlide(){
    if(index === slides.length -1 ){
        index=0;
    }else{
        index++;
    }
    changeSlide();
}

function changeSlide(){
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}
