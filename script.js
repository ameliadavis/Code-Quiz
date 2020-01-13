console.log("in java file");
var questionDisplay = document.getElementById("questionTitle");
var answer1 = document.getElementById("option1");
var answer2 = document.getElementById("option2");
var answer3 = document.getElementById("option3");
var questionAnswers = document.getElementById("questionAnswers");
var timeCounter = document.getElementById("timeCounter")
var score = document.getElementById("");
var currentTime = 75;
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

// function runningQuestion(){
//   for(var i = 0; i < questions.length -1; i++){ 
//   renderQuestion();
// }
// };

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

// var lastQuestionIndex = questions.length-1;
// var runningQuestionIndex = 0;
// Dont forget the document ready function!!

// //  Function should pull question from questions array and 
// function generateQuestion(){
//     console.log("inside generateQuestion Function");
//     console.log(questions.answerA);
//   // var q = questions[runningQuestionIndex];
//   questions.innerHTML = "<h2>" + questions[q] + "</h2>",
//   $(".option1").text("Answer");
//   console.log(this);
//   answer2.innerHTML = questions.answerB;
//   answer3.innerHTML = questions.answerC;
// };


function testCorrectAnswer(){
   console.log("inside test correct answer function");
   console.log(this.value)
   currentQuestion++;
   renderQuestion();
   if(questions[currentQuestion].correct === this.value)//
  alert("YAY you got it right!");
  score+5; 
  currentQuestion++;
    if(currentQuestion > questions.length) {
      alert(score);
    } else {
      renderQuestion;
    }
  // increment current question here and call render question, also test to see if we are at the end of the array of questions before we render another question. 
}

// Event Handler for start Quiz
$("#start-Button").on("click", function() {
    console.log("start Button Click");
    renderQuestion();
    // runningQuestion();
    timerCountDown();
});

function timerCountDown(){
  setInterval(function(){   
      currentTime--; 
      $("#timeCounter").innerHTML = currentTime;
      if(currentTime <= 0) {alert("time is out")};
      console.log(timeCounter);
      console.log(currentTime);
  },1000);
};