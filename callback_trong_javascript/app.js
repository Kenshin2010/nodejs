function readDatabase(callback) {
    var user = {
        name: "Mai Hoa"
    }

    callback(user);
}

readDatabase(function (data) {
    console.log("Hello Nodejs");
    console.log("data", data);
});


readDatabase(function (data) {
    console.log("Hello Nodejs");
    console.log("User name: ", data.name);
});