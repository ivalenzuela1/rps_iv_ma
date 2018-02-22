var player1 = "Nacho";
var player2 = "Marcel";
var wins1 = 0;
var wins2 = 0;
var weapons = ['rock', 'paper', 'scissors'];

// your code goes here
while (wins1 < 3 && wins2 < 3){
  
  var weaponOfChoice1 = weapons[Math.floor(Math.random() * weapons.length) % 3];
  var weaponOfChoice2 = weapons[Math.floor(Math.random() * weapons.length) % 3];

  console.log(player1 + " Choice: " + weaponOfChoice1)
  console.log(player2 + " Choice: " + weaponOfChoice2)

  if (weaponOfChoice1 === 'rock' && weaponOfChoice2 === 'scissors'){
    console.log(player1 + " wins!");
    wins1++;
    console.log("wins1 " + wins1);
    
  }else if (weaponOfChoice1 === 'paper' && weaponOfChoice2 === 'rock'){
    console.log(player1 + " wins!")
    wins1++;
    console.log("wins1 " + wins1);
    
  }else if (weaponOfChoice1 === 'scissors' && weaponOfChoice2 === 'paper'){
    console.log(player1 + " wins!")
    wins1++;
    console.log("wins1 " + wins1);

  } else if (weaponOfChoice2 === 'rock' && weaponOfChoice1 === 'scissors'){
    console.log(player2 + " wins!");
    wins2++;
    console.log("wins2 " + wins2);
    
  }else if (weaponOfChoice2 === 'paper' && weaponOfChoice1 === 'rock'){
    console.log(player2 + " wins!")
    wins2++;
    console.log("wins2 " + wins2);
    
  }else if (weaponOfChoice2 === 'scissors' && weaponOfChoice1 === 'paper'){
    console.log(player2 + " wins!")
    wins2++;
    console.log("wins2 " + wins2);

   }
 }



    if (wins1 === 3){ 
       console.log(player1 + " IS THE WINNER");
      } else {console.log(player2 + " IS THE WINNER");}








