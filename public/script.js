const card = document.getElementById("card");
const popUp = document.getElementById("pop-up");
const popUpButton = document.getElementById("pop-up-button");

setTimeout(()=>{
    popUp.classList.remove("hidden");
},6000);

popUpButton.onclick = function(){
    popUp.classList.add("hidden");
}




var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
setTimeout(()=>{
    confetti.clear();
},5000);
AOS.init();





