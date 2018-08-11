

/**
 * // Bổ sung thông tin
Person.prototype.gender = "";
Person.prototype.showGender = function(){
document.write(this.gender);
};

// Sử dụng
var cuong = new Person();
cuong.gender = "Nam";
cuong.showGender();
 */


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function () {
    return this.name;
}

Person.prototype.getAge = function () {
    return this.age;
}

Person.prototype.getAddress = function () {
    return this.address;
}

Person.prototype.address = "HaNoi";

function User(name) {
    this.name = name;
}

User.prototype = new Person();

var person = new Person("Long", "18");
var user = new User("Hoang", "11");

console.log(person.getName() + " - " + person.getAge() + " - " + person.getAddress());
console.log(user.getName() + " - " + user.getAge() + " - " + user.getAddress());


