let startGame = confirm('Do you want to play a game?');
let attempt = 0;
let money = 0;
let maxAttempt = 3;
let maxThinkNumber = 8;
let maxWinMoney = 100;
let thinkOfNumber;
if (startGame) {
    console.log('start game');
    let thinkOfNumber = Math.floor(Math.random() * (maxThinkNumber - 0 + 1));
    console.log(thinkOfNumber);
    // let money;
    for(let i=0; attempt < maxAttempt; i++) {
        attempt++
        let inputNumber = prompt(`Choose a roulette pocket number from 0 to ${maxThinkNumber}
Attempt ${attempt}
Total prize: ${money}
Possible prize on current attempt: ${maxWinMoney}
${thinkOfNumber}`);  
        
        if (thinkOfNumber === inputNumber) {
           money = 100;
        }
    }
    // if(inputNumber)

} else {
    alert('You did not become a billionaire, but can.');
}