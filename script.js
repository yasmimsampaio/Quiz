// Start Buttom, Timer
var startBtn = document.getElementById("Start");
var question = document.getElementById("Question");
var answers1 = document.getElementById("Answer1");
var answers2 = document.getElementById("Answer2");
var answers3 = document.getElementById("Answer3");
var answers4 = document.getElementById("Answer4");

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
      
      var answerBtnOne = document.createElement("button");
      answerBtnOne.innerText = "Answer1";
      var answerBtnTwo = document.createElement("button");
      answerBtnTwo.innerText = "Answer2";
      var answerBtnThree = document.createElement("button");
      answerBtnThree.innerText = "Answer3";
      var answerBtnFour = document.createElement("button");
      answerBtnFour.innerText = "Answer4";


    question.append("Question1");
    answers1.append(answerBtnOne, "Answer1");
    answers2.append(answerBtnTwo, "Answer2");
    answers3.append(answerBtnThree, "Answer3");
    answers4.append(answerBtnFour, "Answer4");

    
    console.log("Button Click");
}

startBtn.onclick = startBtnClick;

