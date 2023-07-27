const car = {
    //properties 
    engine : true,
    steering : true,
    speed : "slow"
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast"
console.log("The sportscar object: ",sportsCar);

console.log('-------for-in is unreliable -------')
for (prop in sportsCar){
    console.log(prop);
}
console.log('🤔','Iteraing over object And its prototype!');
console.log("--------for-of is reliable -------");
//for (prop of Object.keys(sportsCar[prop]))
for (prop of Object.entries(sportsCar[prop]))
{
    console.log(prop + ":" + sportsCar[prop]);
    //props mean properties
}
console.log('🎯', 'Iterating over object" \' "  OWN properties only');