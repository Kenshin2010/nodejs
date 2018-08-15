var person = {
    fisrtName : "Nguyen",
    lastName : "Loan",

    sayHello : function(){
        console.log("Hello, How are you ??? fisrtName " + this.fisrtName + " - LastName " + this.lastName);
    } 
}

person.sayHello();
console.log(person.fisrtName);
console.log(person["lastName"]);

var obj = new Object();
obj.fistName = "Nguyen";
obj.lastName = "Hong";
obj.run = function () {
    console.log("Hong running .... !!! ");
}

console.log(obj.run());