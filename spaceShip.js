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
    console.log(`${this.name} ${this.topSpeed}`);
  }
}
// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const spaceship1 = new SpaceShip("Discovery:", "Topspeed 9.5");
const spaceship2 = new SpaceShip("Challenger:", "TopSpeed 8.0");

spaceship1.accelerate(); // Outputs: Discovery: Topspeed 9.5
spaceship2.accelerate(); // Outputs: Challenger: Topspeed 8.0