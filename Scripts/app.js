(function() {

    'use strict';
    
    // variables
    
    
    function rollDice() {
        var status = document.getElementById("status");
        var d1 = Math.floor(Math.random() * 6) + 1;
        var d2 = Math.floor(Math.random() * 6) + 1;
        var diceTotal = d1 + d2;
        die1.innerHTML = d1;
        die2.innerHTML = d2;
        status.innerHTML = "You rolled " + diceTotal + ".";
        if (d1 == d2) {
            status.innerHTML += " DOUBLES!";
        }
    }

    var button = $("#rollDice");
    button.ad
    
})();
