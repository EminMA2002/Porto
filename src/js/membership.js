let monthly = document.querySelector(".monthly");
let yearly = document.querySelector(".yearly");
let packschildmonth = document.querySelector(".packschild1");
let packschildyear = document.querySelector(".packschild2");
let blue = document.querySelector(".blue");

yearly.addEventListener("click", () => {

    packschildyear.classList.remove("displaynone")
    packschildmonth.classList.add("displaynone")

    blue.classList.add("swiperight")

});

monthly.addEventListener("click", () => {

    packschildyear.classList.add("displaynone")
    packschildmonth.classList.remove("displaynone")

    blue.classList.remove ("swiperight")
});



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


let box = document.querySelector(".box");
let box1 = document.querySelector(".box1");
let boxtext = document.querySelector(".boxtext");
let boxdownarrow = document.querySelector(".boxdownarrow");


box.addEventListener("click", ()=>{
    if(boxtext.classList.contains("displaynone")){
        boxtext.classList.remove("displaynone")
        boxdownarrow.classList.add("opacity50")
        boxdownarrow.classList.add("rotate")
    }else{
        boxtext.classList.add("displaynone")
        boxdownarrow.classList.remove("rotate")
        boxdownarrow.classList.remove("opacity50")
    }
});