let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0;
let counterDOM = document.getElementById("counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id);
    if (this.id == "increase"){
        counterDOM.innerHTML = counter +=1;
    } else {
        counterDOM.innerHTML = counter -=1; 
    }
    localStorage.setItem("counter", counter);
}