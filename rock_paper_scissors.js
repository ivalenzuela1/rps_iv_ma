var player1Name = 'Player 1';
var player2Name = 'Player 2';
var player1wins = 0;
var player2wins = 0;
var weapons = ['rock', 'paper', 'scissors'];

while(player1wins < 3 && player2wins <3) {

  var weaponOfChoice1 =
      weapons[Math.floor(Math.random() * weapons.length) % 3];
  var weaponOfChoice2 =
      weapons[Math.floor(Math.random() * weapons.length) % 3];
  console.log('Player 1: ' + weaponOfChoice1);
  console.log('Player 2: ' + weaponOfChoice2);
  

  if (weaponOfChoice1 === weaponOfChoice2){
    console.log("Its a Draw!");

  } else if(weaponOfChoice1 === 'rock' && weaponOfChoice2 === 'scissors') {
    player1wins++;
    console.log('Player 1 wins');

  } else if(weaponOfChoice1 === 'paper' && weaponOfChoice2 === 'rock') {
    player1wins++;
    console.log('Player 1 wins');

  } else if(weaponOfChoice1 === 'scissors' && weaponOfChoice2 === 'paper') {
    player1wins++;
    console.log('Player 1 wins');

  } else {
    player2wins++;
    console.log('Player 2 wins');

}

  console.log('Number of wins for Player 1: ' + player1wins);
  console.log('Number of wins for Player 2: ' + player2wins);
  console.log(' ');
}

if(player1wins === 3) {
  console.log('Player 1 wins the game!');
} else if (player2wins === 3) {
  console.log('Player 2 wins the game!');
}