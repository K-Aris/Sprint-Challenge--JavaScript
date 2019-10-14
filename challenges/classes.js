// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMakerTwo {
    constructor (cube) {
        this.length = cube.length;
        this.width = cube.width;
        this.height = cube.height;
    }
    volume() {
        return (this.length * this.width * this.height);
    }
    surfaceArea() {
        return (2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));
    }
}

class CubeMaker extends CuboidMakerTwo {
    constructor (cubePlus) {
        super(cubePlus); 
        this.name = cubePlus.name;  
    }
}

const cuboidTwo = new CuboidMakerTwo({
    length: 4,
    width: 5,
    height: 5,
});

const cube = new CubeMaker({
    name: "Borg",
    length: 10,
    width: 50,
    height: 500,
}); 

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidTwo.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130

console.log(`I am ${cube.name} and my volume is ${cube.volume()}`); // 100
console.log(`I will crush you with my surface area of ${cube.surfaceArea()} miles`); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class 
// called CubeMaker.  Find out the formulas for volume and surface area 
// for cubes and create those methods using the dimension properties from 
// CuboidMaker.  Test your work by logging out your volume and surface 
// area.