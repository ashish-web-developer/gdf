const card = document.getElementById("card");
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
setTimeout(()=>{
    confetti.clear();
},5000);
AOS.init();




