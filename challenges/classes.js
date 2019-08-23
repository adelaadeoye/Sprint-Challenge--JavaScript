// 1. Copy and paste your prototype in here and refactor into class syntax.
/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker {
    constructor(properties) {
        for (let key of['length', 'width', 'height']) {
            this[key] = properties[key]
        }
    }
    volume() { return this.length * this.width * this.height }
    surfaceArea() { return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)) }
}



// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(properties) {
        super(properties);
        this.side = properties.side;

    }
    volume() { return (Math.pow(this.side, 3)) }
    surfaceArea() { return 6 * (Math.pow(this.side, 2)) }

}

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
});
const cube = new CubeMaker({
    side: 11,
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cube.volume()); // 1331

console.log(cuboid.surfaceArea()); // 130
console.log(cube.surfaceArea()); // 726