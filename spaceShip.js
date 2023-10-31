// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
 constructor(name, topSpeed) {
this.name = name;
this.topSpeed = topSpeed;
}
accelerate() {
    const{name, topSpeed} = this;
    console.log('${name} ${topSpeed}');
}
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
const Endevor = new SpaceShip("Endevor", "1500mph")
Endevor.accelerate()

const Challenger = new SpaceShip ('Challenger', '1700mph')
Challenger.accelerate();

const Appolo = new SpaceShip ('Appolo', '1300mph')
Challenger.accelerate();

const Discovery = new SpaceShip ('Discovery', '1900mph')
Challenger.accelerate();



