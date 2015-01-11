$(document).ready(function(){
   
    var remaining;
    var yourGuess;
    var numbersGuessed = [];
    var realNumber;
    var guesses;
    var gameActive = true;
    var prevGuess = 0;
    var hotcold;
    var higherlower;

    function newGame(){
    remaining = 5;
    yourGuess = 0;
    numbersGuessed = [];
    gameActive = true;
    hotcold = "";
    higherlower = "";

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


    function validInput(guess){
        // check if guess is between 1 and 100
        // check if guess is real number
        if ( ((guess < 100)&&(guess > 1)) && ((guess % 1) == 0) )
        {
        return true;
        }
        else
        {
        return false;
        }
    } 
            
    function checkGuess(){

        if (gameActive == true){

    // runs when submit button is clicked
        yourGuess = $(".input").val();
//        alert("you guessed: " + yourGuess);
    
        //  TODO: add && if guesses > 0 
        //
        if (yourGuess != realNumber){
             
            if ($.inArray(yourGuess, numbersGuessed) >= 0)     
                {
                //TODO: add element to show already guessed
                console.log("you already guessed this");
                remaining += 1;
                }

            else if ((validInput(yourGuess) == false))
            {
                // TODO: add element to show invalid input
                console.log("invalid input, try a different guess");
                remaining += 1;
            }

            remaining = remaining - 1;
            guesses = $("<p>You have " + remaining + " guesses left</p>");
//            alert("remaining guesses: " + remaining);
            $(".container").children("p").remove();
            $(".container").append("<p>You guessed: " + yourGuess + "</p>");
            $(".container").append(guesses);
            numbersGuessed.push(yourGuess); // store guesses in array
            
            //TODO: add logic for comparing guess to answer
            if ((realNumber > yourGuess)&&(remaining > 0))
            {
                //alert("Guess higher");
                higherlower = $("<p>You should guess higher.</p>");
                
              //  $(".container").children("p").remove();
                $(".container").append(higherlower);
            }
            if ((realNumber < yourGuess)&&(remaining > 0))
            {
               // alert("Guess lower");
                higherlower = $("<p>You should guess lower.</p>");
                
              //  $(".container").children("p").remove();
                $(".container").append(higherlower);
            }


            // HOT or COLD
            if ((tempCheck(yourGuess) == "hot")&&(remaining > 0))
            {
             hotcold = $("<p>Your guess is hotter.</p>");
             $(".container").append(hotcold);
            }
            

             if ((tempCheck(yourGuess) == "cold")&&(remaining > 0))
             {
             hotcold = $("<p>Your guess is colder.</p>");
             $(".container").append(hotcold);
             }


            //TODO: calculate differene between previous guess and real guess
            // determine if hot or cold
            //

            prevGuess = yourGuess; // update previous guess and store for next round
            

            if (remaining == 0){
                //TODO: set game active variable to false
                alert("you lose");
                gameActive = false; // set game to inactive
            }

        } // end of if your guess is not equal to real number  
            
        // TODO: else if guesses == 0
        // set gameactive to false
        // display gameover
        // new game button set gameactive to true
        //

        if (yourGuess == realNumber){
            alert("you win!");
            // TODO: animate when you win
            }

        } // end of gameActive if clause

    }

    
    // if incorrect, decrement remaining, remove old guess and append new
    $("#submit").on("click", function(){checkGuess();}); 
    $(".input").keydown(function(event){
        // if key pressed was enter
        if (event.which == 13 || event.keyCode == 13){
        checkGuess();
        }
    });   

    function tempCheck(currentGuess) {
    // check whether hot or cold
    // TODO: store old guesses to compare difference
    var lastGap = Math.abs(prevGuess - realNumber);
    var thisGap = Math.abs(currentGuess - realNumber);
    if (lastGap > thisGap)
     {
     return "hot";
     }
    
    if (thisGap > lastGap)
    {
    return "cold";
    }
    
    }   





    $("#reveal").on("click", function(){                                                    
    $("h1 p").remove();
    var solution = $("<p>The answer is:  " + realNumber + "</p>");                                                 
    $("h1").append(solution);                                     
    });                  


    
});

