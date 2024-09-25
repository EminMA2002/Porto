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
let boxtext = document.querySelector(".boxtext");
let boxdownarrow = document.querySelector(".boxdownarrow");
const boxes = document.querySelectorAll(".box");




document.addEventListener("click", (e)=>{
       for( let i = 0; i < 7; ++i){
    if( i == e.target.dataset.index){
        if(boxtext.classList.contains("displaynone")){
            boxtext.classList.remove("displaynone")
            boxdownarrow.classList.add("opacity50")
            boxdownarrow.classList.add("rotate")
        }else{
            boxtext.classList.add("displaynone")
            boxdownarrow.classList.remove("rotate")
            boxdownarrow.classList.remove("opacity50")
        }
      
    }
   }
});