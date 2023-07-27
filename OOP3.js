//this
var purchase1={
    shoes: 100,
    stateTax : 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax;
        console.log("total price is = ", calculation);
    }
}
purchase1.totalPrice();

var purchase2 = {
    shoes : 100,
    stateTax : 1.2,
    totalPrice : function(){
       var calculation = this.shoes * this.stateTax;
       console.log("the total prize is = ", calculation);
    }
    }
    purchase2.totalPrice();