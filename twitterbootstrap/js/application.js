$(document).ready(function(){
   
    var remaining;
    var yourGuess;
    var numbersGuessed = [];
    var realNumber;
    var guesses;

    function newGame(){
    remaining = 5;
    yourGuess = 0;
    numbersGuessed = [];

    // set random number
    function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
    }

    realNumber = getRandomInt(1, 100);
    alert("Random number is: " + realNumber);

    guesses = $("<p>You have " + remaining + " guesses left</p>");
    $(".container").append(guesses);
    
    }

    // game logic
   
    newGame(); // instantiates new game   
    
    // if incorrect, decrement remaining, remove old guess and append new
    $("#submit").on("click", function(){
    // runs when submit button is clicked
        yourGuess = $(".input").val();
        alert("you guessed: " + yourGuess);
    //
        if (yourGuess != realNumber){
             
            if ($.inArray(yourGuess, numbersGuessed) >= 0)     
                {
                console.log("you already guessed this");
                remaining += 1;
                }

            remaining = remaining - 1;
            guesses = $("<p>You have " + remaining + " guesses left</p>");
            alert("remaining guesses: " + remaining);
            $(".container p").remove();
            $(".container").append(guesses);
            numbersGuessed.push(yourGuess); // store guesses in array
        }   
            
    
        if (yourGuess == realNumber){
            alert("you win!");
            // TODO: animate when you win
            }

    });

    
   
    
       



    $("#reveal").on("click", function(){                                                    
    var solution = $("<p>The answer is:  " + realNumber + "</p>");                                                 
    $("h1").append(solution);                                     
    });                  


    
});

