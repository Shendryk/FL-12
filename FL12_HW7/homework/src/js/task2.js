let gameCont = true;
let gameNew = false;
let attempts = 3;
let maxPrize = 100;
let totalPrize = 0;
let maxNumber = 4;
let victory = false;
let answer;
let thinkOfNumber;


gameCont = confirm('Do you want to play a game?');

if(!gameCont){
    alert('You did not become a billionaire, but can');
} else {

    while(gameCont){

        if (gameNew){
            gameNew = false;
            totalPrize = 0;
            attempts = 3;
            maxNumber = 8;
            maxPrize = 100;
            
        } else {
            maxNumber += maxNumber;
            attempts = 3;
            if (window.onload) {
                maxPrize; 
            } else {
                maxPrize += maxPrize;
            }
            
        }

        thinkOfNumber = Math.floor(Math.random() * (maxNumber - 0 + 1)); 
        victory=false;

        for (let i=3; i>=1; i--) {
            answer = +prompt(`Choose a roulette pocket number from 0 to ${maxNumber}.
Attempts left: ${i}
Total prize: ${totalPrize} $
Possible prize on current attempt: ${maxPrize} $ ${thinkOfNumber}`);

            if (answer === thinkOfNumber){
                totalPrize += maxPrize;
                victory = true;

                if (!confirm(`Congratulation, you won!   Your prize is: ${totalPrize} $ Do you want to continue?`)){
                    alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
                    gameCont = false;
                    gameNew = confirm('Want to play from the start?');

                    if (gameNew){
                        gameCont = true;
                    }
                }
                break;
            }
            maxPrize = maxPrize/2;
        }
        if (!victory){
            alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
            gameNew = confirm('Want to play from the start?');
            gameCont = gameNew;

        }
    }
}