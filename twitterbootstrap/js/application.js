$(document).ready(function(){
    var remaining = 5;


    // set random number
    function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
    }
    var realNumber = getRandomInt(1, 100);
    alert("Random number is: " + realNumber);

    var guesses = $("<p>You have " + remaining + " guesses left</p>");
    $(".container").append(guesses);

    // if incorrect, decrement remaining, remove old guess and append new
    $("#submit").on("click", function(){
    // runs when submit button is clicked
    alert("you hit submit");
    });
});

