let x=0;
const increment =document.getElementById("increment");
const decrement =document.getElementById("decrement");
const counter =document.getElementById("counter");
const reset =document.getElementById("reset");

increment.addEventListener("click", function(){
    x += 1;
    counter.innerHTML=`${x}`;

});

decrement.addEventListener("click", function(){
    x -= 1;
    counter.innerHTML=`${x}`;

});

reset.addEventListener("click", function(){
    x = 0;
    counter.innerHTML=`${x}`;

});