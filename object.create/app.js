var person = {
    fisttName: "",
    lastName : "",
    getFullName: function () {
        return this.fisttName + " - " + this.lastName;
    }
}

var hoa = Object.create(person);
hoa.fisttName = "Hoa";
hoa.lastName = "Mai";

var yen = Object.create(person);
yen.fisttName = "Yen";
yen.lastName = "Phuong";

console.log(hoa.getFullName());
console.log(yen.getFullName());