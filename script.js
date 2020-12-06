 const slides = document.querySelector(".slider").children;
//console.log(slides)
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator"); 
index=0;



prev.addEventListener("click", function(){
    console.log("prev click")
    prevSlide()
    updateCircleIndicator()
})

next.addEventListener("click", function(){
    console.log("next click")
    nextSlide()
    updateCircleIndicator()
})

// create circle indicators
function circleIndicator(){
    for(let i=0; i < slides.length; i++){
        const div=document.createElement("div");
              div.innerHTML=i+1;
              div.setAttribute("onclick", "indicateSlide(this)")
              if(i==0){
                  div.className="active";
              }
              indicator.appendChild(div);
    }
}
circleIndicator();

function updateCircleIndicator(){
    for(let i = 0; i < indicator.children.length; i++){
        // remove active class from all indicator circles
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}

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
