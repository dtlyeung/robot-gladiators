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
   
    while(playerHealth > 0 && enemyHealth > 0){

     /* Ask the player if they want to fight or skip the battle */
     var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.');

        // ask player if they would like to fight or run
        if (promptFight === 'skip' || promptFight === 'SKIP'){

            // Confirm player wants to skip
            var confirmSkip = window.confirm('Are you sure you would like to quit?')

            //if yes(true), leave fight
            if(confirmSkip){
                window.alert(playerName + ' has chosen to skip this fight. Goodbye!');
        
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney -10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

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

            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave while loop since enemy is dead
            break;
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
            break;
        }

        else {
            window.alert(playerName + ' still has ' + playerHealth + ' health remaining.');
        }
    }    
}
        for(var i = 0; i < enemyNames.length; i++) {
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }