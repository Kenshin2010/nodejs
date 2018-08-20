'use strict';

var a = 2;
// a = 2; fail

class Person{
    constructor(fistName,lastName){
        this.fistName = fistName;
        this.lastName = lastName;
    }

    // dinh nghia function
    sayHello(){
        console.log("Hello , " + this.fistName + " - " + this.lastName);
    }
}
// function Person(fisrtName, lastName) {
//     this.fisrtName = fisrtName;
//     this.lastName = lastName;
// }

// Person.prototype.sayHello = function () {
//     console.log("Hello " + this.fisrtName + " - " + this.lastName);
// }

var hoa = new Person("Hoa", "Mai");
hoa.sayHello();

var phuong = new Person("Phuong", "Yen");
phuong.sayHello();


console.log(hoa.__proto__);
console.log(phuong.__proto__ );
console.log(phuong.__proto__ === hoa.__proto__);