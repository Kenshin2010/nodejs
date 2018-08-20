var obj = {
    sayHello : "hello"
}

console.log(obj.sayHello);
console.log(obj['sayHello']);

var prop = "sayHello"
console.log(obj[prop]);

//function va arrs

var arr = [];
arr.push(function () {
    console.log("Hello nodejs1");
});

arr.push(function () {
    console.log("Hello nodejs2");
});

arr.push(function () {
    console.log("Hello nodejs3");
});

arr[0]();
console.log("=====================");
arr.forEach(function(item){
    item();
})