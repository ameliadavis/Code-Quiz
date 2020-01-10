

var questionDisplay = document.getElementById("card-title");
var answer1 = document.getElementById("option1");
var answer2 = document.getElementById("option2");
var answer3 = document.getElementById("option3");
var timerCounter = document.getElementById("timeCounter")
var timer = 75;
var score = document.getElementById("");


// Dont forget the document ready function!!

function generateQuestion(){
  //
};

function testCorrectAnswer(){

};

function timerCountDown(){
        console.log(timer);
            var timeEl = setInterval(function(){   
                timer--; 
                document.getElementById("timeCounter").textContent = timer;
                if(timer <= 0) {timer=1}
                console.log(timer);
            },1000);
            console.log(timeEl);   
}


function question1(){
    //Display question in card title

    // Display answers in radio button places
    //if else statement for when user submits answer
    // add to score counter 
    // move to next question
}

$("#btn-outline-primary").on("click", timerCountDown( {
    
  }));