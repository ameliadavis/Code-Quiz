console.log("in java file");
var questionDisplay = document.getElementById("questionTitle");
var answer1 = document.getElementById("option1");
var answer2 = document.getElementById("option2");
var answer3 = document.getElementById("option3");
var questionAnswers = document.getElementById("questionAnswers");
var timeCounter = document.getElementById("timeCounter");
var score = 0;
var currentScore = window.localStorage.setItem(score, " ");
var currentTime = 30;
var currentQuestion = 0;


// this is an array where all the questions will be stored
var questions =[
    {
    question:"What data types can be stored in a javaScript Array?",
    answer1: "1) strings, booleans, special characters ",
    answer2: "2) numbers, booleans, strings ",
    answer3: "3) booleans, numbers, conditions",
    correct: "2"
    },  
    { 
    question:"Where should you add the script tag in the HTML Document?",
    answer1: "1) right below the opening Body tags",
    answer2: "2) in the head tags",
    answer3: "3) right above the closing body tags",
    correct: "3"
    },
    { 
    question:"What is an annonymous function in javaScript?",
    answer1: "1) a function inside of another function",
    answer2: "2) a function without a name",
    answer3: "3) a method",
    correct: "2"
    },
    { 
    question:"What is the correct javaScript syntax for event listeners?",
    answer1: "1) button.addEventListener(click, function());",
    answer2: "2) addEventListener.button(click, function())",
    answer3: "3) click.addEventListener.button (function())",
    correct: "1"
    },
    { 
    question:"what is the operator for comparing two conditions?",
    answer1: "1) =>",
    answer2: "2) +=",
    answer3: "3) === ",
    correct: "3"
    },
];

function renderQuestion(){
  console.log(questions[0].question);
  // console.log(runningQuestion);
  console.log(questionDisplay);
  console.log(questions[0].answer2);
  questionDisplay.textContent = questions[currentQuestion].question;
  answer1.textContent = questions[currentQuestion].answer1;
  answer2.textContent = questions[currentQuestion].answer2;
  answer3.textContent = questions[currentQuestion].answer3;
  // $("#option1").on("click", testCorrectAnswer());
  // $("#option2").on("click", testCorrectAnswer());
  // $("#option3").on("click", testCorrectAnswer()); 

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

function testCorrectAnswer(){
   console.log("inside test correct answer function");
   currentQuestion++;
   renderQuestion();
   alert($(Option).attr("id"));
  //  console.log($(this).val());
  //  console.log('${click.value}');
   if(questions[currentQuestion].correct === this.value){
    alert("YAY you got it right!");
    score+5; 
    currentQuestion++;
    if(currentQuestion > questions.length) {
      alert(score);
    } else {
      alert("whoops wrong answer!");
      renderQuestion;
    } console.log(currentScore)};
  // increment current question here and call render question, also test to see if we are at the end of the array of questions before we render another question. 
}

function finalScore() {
 alert("final score " +score);
 var finalScore = prompt("please enter initals");
 window.localStorage.setItem(finalScore, " ");
 highScoreScreen();
};

function highScoreScreen(){
  window.location.href = "Highscores.html";
};

function timerCountDown(){
  setInterval(function(){   
      currentTime--; 
      timeCounter.textContent = currentTime + " seconds";
      if(currentTime <= 0) {
        finalScore();
      };
      console.log(timeCounter);
      console.log(currentTime);
  },1000);
};

// Event Handler for start Quiz
$("#start-Button").on("click", function() {
  console.log("start Button Click");
  renderQuestion();
  // runningQuestion();
  timerCountDown();
});