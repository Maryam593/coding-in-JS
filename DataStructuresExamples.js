//example 1
/*const vegetables = ['potato','cucumber','tomato','onion'];
console.log("Following is the list of vegetables: ")
function appendIndex(vegetables, index)

{
    
    console.log(` ${index}. ${vegetables}`)
}
fruits.forEach(appendIndex); */
//example 2 - forEach()
/*const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});*/
//example 3 - filter()
/*const nums = [0,10,20,30,40,50];
nums.filter( function(nums) {
    return nums > 20;
})*/
//example 4 - map()
/*[0,10,20,30,40,50].map( function(num) {
    return num / 10
})*/
//------------------
//working with objects in javascript 
//------------------
//for each() in object
/*const result = [];
const drone = {
    speed: 100,
    color: 'yellow',
    steering : 'accurate',
    windows : 'covered'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)*/
//maps in object
/*let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

//console.loh(bestBoxers) - it will display the whole list of properties in maps

console.log(bestBoxers.get(1));*/
//set in object in javascript 
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
