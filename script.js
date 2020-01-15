console.log("in java file");
var questionDisplay = document.getElementById("questionTitle");
var questionDisplay2 = document.getElementById("questionTitle2");
var answer1 = document.getElementById("option1");
var answer2 = document.getElementById("option2");
var answer3 = document.getElementById("option3");
var questionAnswers = document.getElementById("questionAnswers");
var timeCounter = document.getElementById("timeCounter");
var score = 0;
var highScores = 0
var finalScore;
var currentScore = window.localStorage.setItem(score, " ");
var currentTime = 30;
var currentQuestion = 0;
var objButton;
var userAnswer;
var scoreDisplay= document.getElementById("scoreDisplay");
var instructions= document.getElementById("instructions");

// this is an array where all the questions will be stored
var questions =[
    {
    question:"What data types can be stored in a javaScript Array?",
    answer1: "1) strings, booleans, special characters ",
    answer2: "2) numbers, booleans, strings ",
    answer3: "3) booleans, numbers, conditions",
    correct: "option2"
    },  
    { 
    question:"Where should you add the script tag in the HTML Document?",
    answer1: "1) right below the opening Body tags",
    answer2: "2) in the head tags",
    answer3: "3) right above the closing body tags",
    correct: "option3"
    },
    { 
    question:"What is an annonymous function in javaScript?",
    answer1: "1) a function inside of another function",
    answer2: "2) a function without a name",
    answer3: "3) a method",
    correct: "option2"
    },
    { 
    question:"What is the correct javaScript syntax for event listeners?",
    answer1: "1) button.addEventListener(click, function());",
    answer2: "2) addEventListener.button(click, function())",
    answer3: "3) click.addEventListener.button (function())",
    correct: "option1"
    },
    { 
    question:"what is the operator for comparing two conditions?",
    answer1: "1) =>",
    answer2: "2) +=",
    answer3: "3) === ",
    correct: "option3"
    },
];

function renderQuestion(){
  questionAnswers.removeAttribute("class", "hide");
  questionDisplay.textContent = questions[currentQuestion].question;
  answer1.textContent = questions[currentQuestion].answer1;
  answer2.textContent = questions[currentQuestion].answer2;
  answer3.textContent = questions[currentQuestion].answer3;

  $("#option1").on("click", function(){
    testCorrectAnswer();
  });
  $("#option2").on("click", function(){
    testCorrectAnswer();
  });
  $("#option3").on("click", function(){
    testCorrectAnswer();
  });
}

function f1(objButton){  
objButton = objButton;
 userAnswer = objButton.value;
//  alert(objButton.value);
//   console.log("this",this);
  // console.log("user answer", userAnswer);
  testCorrectAnswer;
}

function testCorrectAnswer(){
   console.log("inside test correct answer function");
  if(currentQuestion >= questions.length){
    console.log("completed question array");
    finalScores();
    return;
  }if(questions[currentQuestion].correct === userAnswer){
    // alert("YAY you got it right!");
    score++; 
    score++;
    currentQuestion++;
    renderQuestion();
    return;
  } else {
      // alert("whoops wrong answer!");
      currentQuestion++;
      renderQuestion();
    } 
  };

function finalScores(){
alert("final score " + score);
finalScore = prompt("please enter initals");
// highScores.push(finalScore + score);
localStorage.setItem(finalScore, JSON.stringify(score));
console.log(finalScore);
Highscores();
// window.location.href = "Highscores.html";
// return;
};

function Highscores(){
  // window.location.href = "Highscores.html"; 
  
    console.log(questionDisplay2);
    questionDisplay2 = document.getElementById("questionTitle2");
    questionDisplay2.textContent = "High Scores";
    scoreDisplay.innerHTML=JSON.parse(localStorage.getItem(finalScore, score));// dont forget to stringify!
    // var scores = localStorage.getItem(score);
    var scores = window.localStorage.getItem(score);
    console.log("stored ", scores);
  
  // questionDisplay.textContent = localStorage.getItem(finalScore, score);
  // questionDisplay.textContent = localStorage.setItem("HighScores", JSON.stringify(score)+finalScore);
  
  // localStorage.setItem('items', JSON.stringify(itemsArray))
  // const data = JSON.parse(localStorage.getItem('items'))
}

// Timer count down function
function timerCountDown(){
  var timeEl = setInterval(function(){   
      currentTime--; 
      timeCounter.textContent = currentTime + " seconds";
      if(currentTime <= 0) {
        clearInterval(timeEl);
        finalScores;
      };
      // console.log(timeCounter);
      // console.log(currentTime);
  },1000);
};

// Event Handler for start Quiz also triggers the timer
$("#start-Button").on("click", function() {
  console.log("start Button Click");
  renderQuestion();
  timerCountDown();
  instructions.setAttribute("class","hide");
});

$("#high-Score-Button").on("click", function() {
  console.log("grabbing highscore");
  console.log("win" ,window.location.href);
  window.location.href = "Highscores.html"; 
  // Highscores();

});
if(window.location.href === "file:///Users/adavis853/www/Code-Quiz/index.html"){
  instructions.removeAttribute("class","hide");
}
if(window.location.href === "file:///Users/adavis853/www/Code-Quiz/Highscores.html"){
  $(document).ready(function(){
    Highscores();
  })
}