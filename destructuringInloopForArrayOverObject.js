//1st
/*const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}*/
//2nd
/*const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}*/
//3rd
//built-in method
//key method
/*
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']*/
//4th 
//built in method 
//object.entries method
/*const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));*/
//example 1
/*var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])
}*/
//example2
function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();
  
