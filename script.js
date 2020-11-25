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
var questionNumber = 1;

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
    console.log("hello?");
    console.log(questionNumber);
    if (this.value === "right") {
        score = score + 10;
        questionNumber = questionNumber + 1;
        console.log(score);    
     // go to next question
    }
    else if (this.value === "wrong") {
        secondsLeft = secondsLeft - 20;
        questionNumber = questionNumber + 1;
     // go to next question
    }
    console.log(questionNumber);
    if (questionNumber === 2) {
        secondQuestion();
    } else if (questionNumber === 3) {
        thirdQuestion();
    } else if (questionNumber === 4) {
        fourthQuestion();
    } else if (questionNumber === 5) {
        fifthQuestion();
    } else if (questionNumber === 6) {
        results();
    }
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
function thirdQuestion() {
    question.innerHTML="";
    answers1.innerHTML="";
    answers2.innerHTML="";
    answers3.innerHTML="";
    answers4.innerHTML="";

    var answerBtnOne = document.createElement("button");
    answerBtnOne.innerText = "Answer1";
    answerBtnOne.setAttribute("value", "right");
    var answerBtnTwo = document.createElement("button");
    answerBtnTwo.innerText = "Answer2";
    answerBtnTwo.setAttribute("value", "wrong");
    var answerBtnThree = document.createElement("button");
    answerBtnThree.innerText = "Answer3";
    answerBtnThree.setAttribute("value", "wrong");
    var answerBtnFour = document.createElement("button");
    answerBtnFour.innerText = "Answer4";
    answerBtnFour.setAttribute("value", "wrong");

    question.append("What is Yasmim's favorite band?");
    answers1.append(answerBtnOne, "Johnnyswim");
    answers2.append(answerBtnTwo, "The Beatles");
    answers3.append(answerBtnThree, "Imagine Dragons");
    answers4.append(answerBtnFour, "NSYNC!");

    answerBtnOne.onclick = answerClick;
    answerBtnTwo.onclick = answerClick;
    answerBtnThree.onclick = answerClick;
    answerBtnFour.onclick = answerClick;
}
function fourthQuestion() {
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
    answerBtnTwo.setAttribute("value", "wrong");
    var answerBtnThree = document.createElement("button");
    answerBtnThree.innerText = "Answer3";
    answerBtnThree.setAttribute("value", "right");
    var answerBtnFour = document.createElement("button");
    answerBtnFour.innerText = "Answer4";
    answerBtnFour.setAttribute("value", "wrong");

    question.append("What is Yasmim's favorite sport?");
    answers1.append(answerBtnOne, "Soccer");
    answers2.append(answerBtnTwo, "Softball");
    answers3.append(answerBtnThree, "Basketball");
    answers4.append(answerBtnFour, "Tennis");

    answerBtnOne.onclick = answerClick;
    answerBtnTwo.onclick = answerClick;
    answerBtnThree.onclick = answerClick;
    answerBtnFour.onclick = answerClick;
}
function fifthQuestion() {
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
    answerBtnTwo.setAttribute("value", "wrong");
    var answerBtnThree = document.createElement("button");
    answerBtnThree.innerText = "Answer3";
    answerBtnThree.setAttribute("value", "wrong");
    var answerBtnFour = document.createElement("button");
    answerBtnFour.innerText = "Answer4";
    answerBtnFour.setAttribute("value", "right");

    question.append("What instrument can Yasmim play?");
    answers1.append(answerBtnOne, "Guitar");
    answers2.append(answerBtnTwo, "Drums");
    answers3.append(answerBtnThree, "Violin");
    answers4.append(answerBtnFour, "Piano");

    answerBtnOne.onclick = answerClick;
    answerBtnTwo.onclick = answerClick;
    answerBtnThree.onclick = answerClick;
    answerBtnFour.onclick = answerClick;
}
function results() {
    question.innerHTML="";
    answers1.innerHTML="";
    answers2.innerHTML="";
    answers3.innerHTML="";
    answers4.innerHTML="";

    question.append(score + " is your score!");
}

startBtn.onclick = startBtnClick;
