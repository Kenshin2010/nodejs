var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();


var port = 3000;

app.use("/assets", express.static(__dirname + "/public"));
app.use(cookieParser());

//custom middleware

app.use("/", function (req, res, next) {
    console.log("Request Url : " + req.url);
    req.requestTime = new Date();
    next();
})


// other 

app.get("/", function (req, res) {
    console.log("cookieParser", req.cookies);
    res.send(`
    <link href="/assets/style.css" rel="stylesheet" type="text/css">
    <h1> Hello express !!! </h1>
    <p> Request time :  ${req.requestTime}}</p>
    
    `);
})

app.get("/api", function (req, res) {
    res.json({
        fisrtName: "Mai",
        lastName: "Hoa"
    });
})

/**
 * product : id
 * user : id
 */
app.get("/user/:id", function (req, res) {
    res.cookie("userName", req.param);
    res.send(`<h1>user : ${req.params.id}`);
})

app.listen(port, function () {
    console.log("server listening on PORT " + port);
});



