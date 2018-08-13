var hello = require("./hello1.js")

hello();

var hello2 = require("./hello2").sayHello;
hello2();

var hello3 = require("./hello3");
hello3.sayHello();
hello3.message = "Change hello 3 to hello 4";

var hello3_2 = require("./hello3");
hello3_2.sayHello();

var Hello4 = require("./hello4");
var hello4 = new Hello4();

hello4.sayHello();


var hello5 = require("./hello5").sayHello;
hello5();