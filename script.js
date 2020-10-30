// Start Buttom
var startBtn = document.getElementById("Start");
var secondsLeft = 10;

function startBtnClick() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        console.log(secondsLeft);
        // timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          console.log("Time's Up!");
        }
    
      }, 1000);
    
    console.log("Button Click");
}

startBtn.onclick = startBtnClick;

