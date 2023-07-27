var bird = { //class
    hasWings : true,   //properties
    canFly : true,
    hasFeathers : true

}

var Eagel1 = Object.create(bird);
console.log("Eagle : ", Eagel1);
console.log("Can eagle fly? :  ", Eagel1.canFly);
console.log("Does eagle has wings? :  ", Eagel1.hasWings);
console.log("Does eagle has feathers?: ", Eagel1.hasFeathers );
console.log("\n");
var eagle2 = Object.create(bird);
console.log("eagle2 has wings = ",eagle2.hasWings);
console.log("eagle2 has feathers = ",eagle2.hasFeathers);
console.log("eagle2 can fly: ",eagle2.canFly);
