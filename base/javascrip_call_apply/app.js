var obj = {
    name: "Mai Hoa",
    sayHello: function (param1, param2) {
        console.log(`hello ${this.name}`);
        console.log("params : ", param1, param2);

    }
}

obj.sayHello("Xin chao" , "2018");
obj.sayHello.call({ name: "Yen Phuong" },"Xin chao", "2018");
obj.sayHello.apply({ name: "Yen Phuong" },["Xin chao","2019"]);