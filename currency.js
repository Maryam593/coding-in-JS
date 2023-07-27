var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;


function ConvertCurrency(amount,rate)
{
    return amount*rate;
}
currencyTwo = ConvertCurrency(currencyOne,exchangeRate);
console.log("The currency is", currencyTwo); 

//var val = "Hello"
/*consoleLog('Hello');
function consoleLog(val) {
    console.log(val);
    return val;
}*/