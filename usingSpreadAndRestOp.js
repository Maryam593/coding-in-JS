//using spread operator
//... is use as a spread operator
const fruits = ['apple', 'pear', 'plum']
//const berries = ['blueberry', 'strawberry']
const vegetables = ['potato','onion','lady finger']
const fruitsAndBerries = [...fruits, ...vegetables] // concatenate
console.log(fruitsAndBerries); // outputs a single array

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

//push() using spread operator
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

//convert a string into array using spread operator 

let string = "Maryam";
let blow = [...string];
console.log(blow);

//copying either an object or any array into seprate one 
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car_2 = {...car1}

car1.speed = 201

console.log(car1.speed, car_2.speed)
//also 
//pop()
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2)
