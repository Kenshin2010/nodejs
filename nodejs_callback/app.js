
var fistFunction = function () {
    console.log("I am first !");
}


var secondFunction = function () {
    setTimeout(fistFunction, 5000);
    console.log("I am second !");
}


secondFunction();
