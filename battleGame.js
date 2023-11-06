// 1. Create attack function below.  This will take the following parameters:
// attackingPlayer, defendingPlayer, baseDamage, variableDamage

const playerA ={
  health:10, name: "Mathew"
}
const playerB ={
  health:10, name:"George"
}

function attack(attackingPlayer, defendingPlayer, baseDamage, variableDamage) {
  const randomDamage = Math.floor(Math.random() * (variableDamage + 1));
  console.log(randomDamage)
  const totalDamage = baseDamage + randomDamage
  defendingPlayer.health-= totalDamage;
  //return '${attackingPlayer.name} hits ${defendingPlayer.name} for ${totalDamage} damage. ${defendingPlayer} has ${defendingPlayer.health} health remaining.');
  return(`${attackingPlayer.name} hits ${totalDamage} damage to ${defendingPlayer.name}. ${defendingPlayer.name}'s health is now ${defendingPlayer.health}.`);
};

console.log(attack(playerA, playerB, 1, 4))

// 2. Create player1 and player2 objects below
// Each should have a name property of your choosing, and health property equal to 10
const player1 ={
  health:10, name: "Ronaldo"
}
const player2={
  health:10, name:"Mike"
}

// 3. // Refactored attack function as an arrow function

const arrow = (attackingPlayer, defendingPlayer, baseDamage, variableDamage) => {
  const randomDamage = Math.floor(Math.random() * (variableDamage + 1));
  console.log(randomDamage)
  const totalDamage = baseDamage + randomDamage

  defendingPlayer.health -= totalDamage;
  return(`${attackingPlayer.name} hits ${totalDamage} damage to ${defendingPlayer.name}. ${defendingPlayer.name}'s health is now ${defendingPlayer.health}.`);
  
};

arrow(player1, player2, 1, 4);

// DO NOT MODIFY THE CODE BELOW THIS LINE
// Set attacker and defender.  Reverse roles each iteration
let attackOrder = [player1, player2];

// Everything related to preventInfiniteLoop would not generally be necessary, just adding to
// safeguard students from accidentally creating an infinite loop & crashing browser
let preventInfiniteLoop = 100;
while (player1.health >= 1 && player2.health >= 1 && preventInfiniteLoop > 0) {
  const [attackingPlayer, defendingPlayer] = attackOrder;
  console.log(attack(attackingPlayer, defendingPlayer, 1, 2));
  attackOrder = attackOrder.reverse();

  preventInfiniteLoop--;
}
const eliminatedPlayer = player1.health <= 0 ? player1 : player2;
console.log(`${eliminatedPlayer.name} has been eliminated!`);