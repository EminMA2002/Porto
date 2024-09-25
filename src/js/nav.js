let line3 = document.querySelector(".line3");
let openedburger = document.querySelector(".openedburger");
let linex = document.querySelector(".linex");
let main = document.getElementById("main");
let navbuttonburger = document.querySelector(".navbuttonburger");
let body = document.querySelector("body")


line3.addEventListener("click", () => {
    openedburger.classList.remove("displaynone")
});


linex.addEventListener("click", () => {
    openedburger.classList.add("displaynone")
});


window.addEventListener("resize", () => {
    openedburger.classList.add("displaynone")
});


window.addEventListener("scroll", () => {
    if( openedburger.classList.contains("displaynone") ){
        body.classList.remove("hidden")
       
    }else{ body.classList.add("hidden") }
});

