$(document).ready(function(){
    var remaining = 5;
    var yourGuess = 0;

    // set random number
    function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
    }
    var realNumber = getRandomInt(1, 100);
    alert("Random number is: " + realNumber);

    var guesses = $("<p>You have " + remaining + " guesses left</p>");
    $(".container").append(guesses);
    
    // game logic
   
    if (remaining > 0){   
    
    // if incorrect, decrement remaining, remove old guess and append new
    $("#submit").on("click", function(){
    // runs when submit button is clicked
        yourGuess = $(".input").val();
        alert("you guessed: " + yourGuess);
    //
        if (yourGuess != realNumber){
            remaining = remaining - 1;
            guesses = $("<p>You have " + remaining + " guesses left</p>");
            alert("remaining guesses: " + remaining);
            $(".container p").remove();
            $(".container").append(guesses);
            }
    
        if (yourGuess == realNumber){
            alert("you win!");
            }

    });

    }
    else
    {
    alert("try hit play again to restart game");
    }



    $("#reveal").on("click", function(){                                                    
    var solution = $("<p>The answer is:  " + realNumber + "</p>");                                                 
    $("h1").append(solution);                                     
    });                  


    
});

