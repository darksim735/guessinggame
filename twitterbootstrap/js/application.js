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
    
    // clear old paragraphs
    $(".container").children("p").remove();
    $(".buttons p").remove();
    $("h1 p").remove();

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
    
    // listen for clicks on reset game button
    $("#restart").on("click", function(){
    newGame(); // resets random number, guesses, etc...
    $(".buttons p").remove();
    $("h1 p").remove();
    });    

   
            
    function checkGuess(){
    // runs when submit button is clicked
        yourGuess = $(".input").val();
        alert("you guessed: " + yourGuess);
    
        //  TODO: add && if guesses > 0 
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
            $(".container").children("p").remove();
            $(".container").append(guesses);
            numbersGuessed.push(yourGuess); // store guesses in array
        }   
            
        // TODO: else if guesses == 0
        // set gameactive to false
        // display gameover
        // new game button set gameactive to true
        //

        if (yourGuess == realNumber){
            alert("you win!");
            // TODO: animate when you win
            }

    }

    
    // if incorrect, decrement remaining, remove old guess and append new
    $("#submit").on("click", function(){checkGuess();}); 
    $(".input").keydown(function(event){
        // if key pressed was enter
        if (event.which == 13 || event.keyCode == 13){
        checkGuess();
        }
    });   

    // function tempCheck() {
    // check whether hot or cold
    // TODO: store old guesses to compare difference
    //}   





    $("#reveal").on("click", function(){                                                    
    $("h1 p").remove();
    var solution = $("<p>The answer is:  " + realNumber + "</p>");                                                 
    $("h1").append(solution);                                     
    });                  


    
});

