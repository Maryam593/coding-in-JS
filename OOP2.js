//OOP2

var purchase2 = {
shoes : 100,
stateTax : 1.2,
totalPrice : function(){
   var calculation = purchase2.shoes * purchase2.stateTax;
   console.log("the total prize is = ", calculation);
}
}
purchase2.totalPrice();