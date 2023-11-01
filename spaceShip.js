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

const spaceship1 = new SpaceShip("Discovery:", "Warp 9.5");
const spaceship2 = new SpaceShip("Challenger:", "Warp 8.0");

spaceship1.accelerate(); // Outputs: Discovery: Warp 9.5
spaceship2.accelerate(); // Outputs: Challenger: Warp 8.0