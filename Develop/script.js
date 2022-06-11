// variables
var timeEl = document.getElementById("counter");
var startButton = document.getElementById("startQuiz");
var question = 
    {
        title: "Commonly used data types DO NOT include:",
        alternatives: ["1.strings", "2.booleans", "3.alerts", "4.numbers"],
        correctAnswer: "1.strings",
    };
    // {
    //     title: "The condition in an if / else statement is enclosed within ____.",
    //     options: ["1.quotes", "2.curly brackets", "3.parenthesis", "4.square brackets"],
    //     correctAnswer: 3
    // },
    // {
    //     title: "Arrays in JavaScript can be used to store ____",
    //     options: ["1.numbers and strings", "2.other arrays", "3.booleans", "4.all of the above"],
    //     correctAnswer: 0
    // },
    // {
    //     title: "String Values must be enclosed within ____ when being assigned to vasriables.",
    //     options: ["1.commas", "2.curly brackets", "3.quotes", "4.parenthesis"],
    //     correctAnswer: 0
    // },
    // {
    //     title: "A very useful tool used during development and debugging for printing content to the debuger is:",
    //     options: ["1.JavaScript", "2.terminal / bash", "3.for loops", "4.console.log"],
    //     correctAnswer: 0
    // },


        

// start quiz button

startButton.addEventListener("click", swapDivsWithClick);
startButton.addEventListener("click", startGame);

// timer function
function startGame() {
    var secondsLeft = 75;
    
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "You have " + secondsLeft + " seconds left";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    startButton.disabled = true;

    }, 1000);
}



// display and hide card containers
function swapDivsWithClick(){
    var d1 = document.getElementById("card");
    var d2 = document.getElementById("cardQuestion");
   if (d1.style.display == "block") {
      d1.style.display = "none";
      d2.style.display = "block";
   } 
// else {
//       d1.style.display = "block";
//       d2.style.display = "none";
//    }
};


// show multiple questions
function showQuestion(q) {
    var titleDiv = document.getElementById("title");
    titleDiv.textContent = q.title;

    var alternativesDiv = document.querySelectorAll(".alternatives");
    for (var i=0; i < alternativesDiv.length; i++){
        alternativesDiv[i].textContent = q.alternatives[i];
    }
    
    // btn0.addEventListener("click", function(){
    //     if(q.correctAnswer == q.alternatives){
    //         console.log("correct answer")
    //     }
    //     else{
    //         console.log("Wrong answer")
    //     }
    // })

    };
   


showQuestion(question);


//if answer is wrong, time is taken off the timer



//when all questions are answered, or timer gets to 0, then game is over.

//function highscore

//when game is over, save initials and score




    // alts.forEach(function(element, index){
    //     element.textContent = q.alternatives[index]; 