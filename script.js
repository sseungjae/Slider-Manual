 const slides = document.querySelector(".slider").children;
//console.log(slides)
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator"); 
index=0;



prev.addEventListener("click", function(){
    console.log("prev click")
    prevSlide()
})

next.addEventListener("click", function(){
    console.log("next click")
    nextSlide()
})

// create circle indicators
function circleIndicator(){
    for(let i=0; i < slides.length; i++){
        const div=document.createElement("div");
              div.innerHTML=i+1;
              div.setAttribute("onclick", "indicateSlide(this)")
              indicator.appendChild(div);
    }
}
circleIndicator();

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
