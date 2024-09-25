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



let box = document.querySelector(".box");
let box1 = document.querySelector(".box1");
let boxtext = document.querySelectorAll(".boxtext");
let boxdownarrow = document.querySelector(".boxdownarrow");
const boxes = document.querySelectorAll(".box");




document.addEventListener("click", (e)=>{
   let icon = e.target.querySelector(".boxdownarrow")
  let number = e.target.dataset.index;
  boxtext[number].classList.toggle("displaynone")
  icon.classList.toggle("rotate")
});