// declared variables
var timeEl = document.getElementById("counter");
var startButton = document.getElementById("startQuiz");
var question1 =  [
    {
        title: "Commonly used data types DO NOT include:",
        alternatives: ["1.strings", "2.booleans", "3.alerts", "4.numbers"],
        correctAnswer: "1.strings",
    },
// var question2 =
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        alternatives: ["1.quotes", "2.curly brackets", "3.parenthesis", "4.square brackets"],
        correctAnswer: "3.parenthesis"
    },
// var question3 =
    {
        title: "Arrays in JavaScript can be used to store ____",
        alternatives: ["1.numbers and strings", "2.other arrays", "3.booleans", "4.all of the above"],
        correctAnswer: "4.all of the above"
    },
// var question4 =
    {
        title: "String Values must be enclosed within ____ when being assigned to variables.",
        alternatives: ["1.commas", "2.curly brackets", "3.quotes", "4.parenthesis"],
        correctAnswer: "3.quotes"
    },
// var question5 =
    {
        title: "A very useful tool used during development and debugging for printing content to the debuger is:",
        alternatives: ["1.JavaScript", "2.terminal / bash", "3.for loops", "4.console.log"],
        correctAnswer: "4.console.log"
    },

]
    


        

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

for( var i=0; i<question1.length;i++){
    
    function showQuestion(q) {
        var titleDiv = document.getElementById("title");
        titleDiv.textContent = q.title;
    
        var alternativesDiv = document.querySelectorAll(".alternatives");
        for (var i=0; i < alternativesDiv.length; i++){
            if(
                q.alternatives[i] == q.correctAnswer
            )
            {
                alternativesDiv[i].textContent = q.alternatives[i];
                alternativesDiv[i].setAttribute("data-iscorrect","true")
            }else{
                alternativesDiv[i].textContent = q.alternatives[i];
                alternativesDiv[i].setAttribute("data-iscorrect","false")
            }
            
        };
        
        };
       
    
    var alternativesDiv = document.querySelectorAll(".alternatives");
    for (let i=0; i<alternativesDiv.length;i++){
        alternativesDiv[i].addEventListener("click",function(){
          if (this.dataset.iscorrect == "true"){
            startButton.textContent = "Correct"
          }else{
            startButton.textContent = "Incorrect"
          }
    
        })
    }; 
    
    showQuestion(question1);
    
}




//if answer is wrong, time is taken off the timer

//when all questions are answered, or timer gets to 0, then game is over.

//function highscore

//when game is over, save initials and score




    // alts.forEach(function(element, index){
    //     element.textContent = q.alternatives[index]; 


    // console.log(alternativesDiv);
    // var e = document.getElementById("btn0");
    // console.log(e.textContent)
    // if(e.textContent == q.correctAnswer){
    //     console.log("Right Answer")
    // }else{
    //     console.log("Wrong Answer")
    // };
    
 

    
    
    // var buttons = document.querySelectorAll(".alternatives");
    // console.log(buttons);
    
    // buttons.addEventListener("click", function(event){
    //    buttons = event.target.innerHTML;


    // })

    // .addEventListener("click", function(event){
    //     var rightanswer = event.target.textContent;
    //     console.log(rightanswer)

    //     // if(q.correctAnswer == q.alternatives[i]){
    //     //     console.log("correct answer")
    //     // }
    //     // else{
    //     //     console.log("Wrong answer")
    //     // }
    // })