function Person() {
    this.message = "Hello nodejs 3";
    this.sayHello = function () {
        console.log(this.message);
    }
}

module.exports = new Person();