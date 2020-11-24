// Start Buttom, Timer
var startBtn = document.getElementById("Start");
var question = document.getElementById("Question");
var answers1 = document.getElementById("Answer1");
var answers2 = document.getElementById("Answer2");
var answers3 = document.getElementById("Answer3");
var answers4 = document.getElementById("Answer4");
var timeEl = document.getElementById("timer");

var secondsLeft = 120;
var score = 0;

function startBtnClick() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till time's up.";
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          console.log("Time's Up!");
        }
    
      }, 1000);
      
      var answerBtnOne = document.createElement("button");
      answerBtnOne.innerText = "Answer1";
      answerBtnOne.setAttribute("value", "wrong");
      var answerBtnTwo = document.createElement("button");
      answerBtnTwo.innerText = "Answer2";
      answerBtnTwo.setAttribute("value", "wrong");
      var answerBtnThree = document.createElement("button");
      answerBtnThree.innerText = "Answer3";
      answerBtnThree.setAttribute("value", "right");
      var answerBtnFour = document.createElement("button");
      answerBtnFour.innerText = "Answer4";
      answerBtnFour.setAttribute("value", "wrong");


    question.append("What is Yasmim's favorite color?");
    answers1.append(answerBtnOne, "Pink");
    answers2.append(answerBtnTwo, "Blue");
    answers3.append(answerBtnThree, "Green");
    answers4.append(answerBtnFour, "Purple");

    answerBtnOne.onclick = answerClick;
    answerBtnTwo.onclick = answerClick;
    answerBtnThree.onclick = answerClick;
    answerBtnFour.onclick = answerClick;

    console.log("Button Click");
}

function answerClick() {
    console.log(this);
    if (this.value === "right") {
        score = score + 10;
        console.log(score);
     // go to next question
    }
    else if (this.value === "wrong") {
        secondsLeft = secondsLeft - 20;
     // go to next question
    }
    secondQuestion();
}
function secondQuestion() {
    question.innerHTML="";
    answers1.innerHTML="";
    answers2.innerHTML="";
    answers3.innerHTML="";
    answers4.innerHTML="";

    var answerBtnOne = document.createElement("button");
    answerBtnOne.innerText = "Answer1";
    answerBtnOne.setAttribute("value", "wrong");
    var answerBtnTwo = document.createElement("button");
    answerBtnTwo.innerText = "Answer2";
    answerBtnTwo.setAttribute("value", "right");
    var answerBtnThree = document.createElement("button");
    answerBtnThree.innerText = "Answer3";
    answerBtnThree.setAttribute("value", "wrong");
    var answerBtnFour = document.createElement("button");
    answerBtnFour.innerText = "Answer4";
    answerBtnFour.setAttribute("value", "wrong");

    question.append("What is Yasmim's favorite food?");
    answers1.append(answerBtnOne, "Pizza");
    answers2.append(answerBtnTwo, "Pasta");
    answers3.append(answerBtnThree, "Steak");
    answers4.append(answerBtnFour, "Sushi");

    answerBtnOne.onclick = answerClick;
    answerBtnTwo.onclick = answerClick;
    answerBtnThree.onclick = answerClick;
    answerBtnFour.onclick = answerClick;
}
startBtn.onclick = startBtnClick;
