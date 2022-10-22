// console.log('hi');
let maxrange = 2;
let gainedPoint = 0;
const userName = prompt(' Enter Your username ');
alert("Welcome  " + userName + "  to my Guess game\n\n");
guessNumberGame();
function guessNumberGame() {


  let generatedNumber = Math.floor(Math.random() * maxrange + 1);
  
  let guessedNumber = parseInt(prompt('Guess a number from 1 to ' + maxrange + ' :'));



  if (guessedNumber == generatedNumber) {
    gainedPoint++;
    console.log('You guessed the correct number, you have gained ' + gainedPoint + ' point ');
    alert('You have moved to a higher level\n\n')
    maxrange++;

    guessNumberGame();
  }
  else {
    console.log('You missed this, Your current point is ' + gainedPoint + '\n Please try again\n\n');
    guessNumberGame();
  }  alert(maxrange);
}