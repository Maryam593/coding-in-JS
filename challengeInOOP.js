//challenge 1
/*class Cake {
    constructor(lyr) {
        this.layers = lyr + 1;
    }
}

var result = new Cake(1);
console.log(result.layers); */
//challenge 2
/*class Animal{
    constructor(lg){
        this.legs = lg;
    }

}
class Dog extends Animal{
    constructor (){
        super(4);
    }
}
var result = new Dog();
console.log(result.legs);*/
//challenge 3
class Animal {

}
class Cat extends Animal{
    constructor(){
        super();
        this.noise = "meow"
    }
}
var result = new Animal();
console.log(result.noise);