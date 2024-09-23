let monthly = document.querySelector(".monthly");
let yearly = document.querySelector(".yearly");
let packschildmonth = document.querySelector(".packschild1");
let packschildyear = document.querySelector(".packschild2");
let blue = document.querySelector(".blue");
let line3 = document.querySelector(".line3");
let openedburger = document.querySelector(".openedburger");
let linex = document.querySelector(".linex");
let main = document.getElementById("main");
let navbuttonburger = document.querySelector(".navbuttonburger");



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


line3.addEventListener("click", () => {
    openedburger.classList.remove("displaynone")
    main.classList.add("displaynonemain")
});


linex.addEventListener("click", () => {
    openedburger.classList.add("displaynone")
    main.classList.remove("displaynonemain")
});


navbuttonburger.addEventListener("click", () => {
    openedburger.classList.add("displaynone")
    main.classList.remove("displaynonemain")
});