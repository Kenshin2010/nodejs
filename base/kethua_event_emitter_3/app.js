
var Dialog = require("./dialog");
var dialog = new Dialog();
dialog.on("hello", function () {
    console.log("Co 1 loi chao moi");
});

dialog.sayHello("Mai Hoa");