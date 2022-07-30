//Game states
// "WIN" - Player robot defeats all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot health is 0 or less
var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName){
    window.alert("Welcome to Robot Gladiators");

/* Ask the player if they want to fight or skip the battle */
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.');

    if(promptFight === 'fight' || promptFight === 'FIGHT'){

    /*subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the
    value in the 'enemyHealth' variable */
    enemyHealth = enemyHealth - playerAttack;

    /* Log a resulting message to the console so we know it worked*/
    console.log(
        playerName + ' attacked ' + enemyName +'. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    //check enemy health
    if (enemyHealth <= 0){
        window.alert(enemyName + ' has died!');
    }

    else {
        window.alert(enemyName + " still has " + enemyHealth + ' health remaining');
    }

    /* subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the
    value in the 'playerHealth' variable */
    playerHealth = playerHealth - enemyAttack;

    /* Log a resulting message to the console so we know it worked */
    console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    //check player health
    if (playerHealth <= 0){
        window.alert(playerName + " has died!");
    }

    else {
        window.alert(playerName + ' still has ' + playerHealth + ' health remaining.');
    }
}
    // If player chooses to skip
    else if (promptFight === 'skip' || promptFight === 'SKIP'){
        // Confirm player wants to skip
        var confirmSkip = window.confirm('Are you sure you would like to quit?')

        //if yes(true), leave fight
        if(confirmSkip){
            window.alert(playerName + ' has chosen to skip this fight. Goodbye!');
            
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney -2;
        }
        //if no(false), ask question again by running fight() again
        else{
            fight()
        }
    }

    else {
    window.alert('You need to choose a valid option. Try again!');
    }
}

    for(var i = 0; i < enemyNames.length; i++) {
        fight(enemyNames[i]);
      }