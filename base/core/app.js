var a = 1;
var b = 3;
var c = 3;

console.log(c);

// ------------------------------------------------------

console.log("=======================================");

function sayHello(){
    console.log("Hello nodejs");
}


sayHello();

function logSay(fn) {
    console.log(" ============= test  nodejs =============");
    fn();
}

logSay(sayHello);


var sayGoodbye = function () {
    console.log("good bye !!!");
}

sayGoodbye();

logSay(function () {
    console.log(" ============= test  nodejs 2 =============");
})



