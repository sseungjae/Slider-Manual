 const slides = document.querySelector(".slider").children;
//console.log(slides)
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", function(){
    console.log("prev click")
})

next.addEventListener("click", function(){
    console.log("next click")
})