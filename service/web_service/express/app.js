var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');

var app = express();


var port = 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// create application/json parser
var jsonParser = bodyParser.json()

app.use("/assets", express.static(__dirname + "/public"));
app.use(cookieParser());
app.set("view engine", "ejs");


//custom middleware

app.use("/", function (req, res, next) {
    console.log("Request Url : " + req.url);
    req.requestTime = new Date();
    next();
})


// other 

// app.get("/", function (req, res) {
//     console.log("cookieParser", req.cookies);
//     res.send(`
//     <link href="/assets/style.css" rel="stylesheet" type="text/css">
//     <h1> Hello express !!! </h1>
//     <p> Request time :  ${req.requestTime}}</p>
//     `);
// })


app.get("/", function (req, res) {
    res.render("index");
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
    // res.cookie("userName", req.param.id);
    // res.send(`<h1>user : ${req.params.id}`);

    //render file ejs test 
    res.render("user", { ID: req.params.id, queryString: req.query.qstr });
})

app.post("/login", urlencodedParser, function (req, res) {
    res.send("Welcome : " + req.body.username);
    console.log(req.body.username);
    console.log(req.body.password);
})

app.post("/loginjson", jsonParser, function (req,res) {
    res.send("OK");
    console.log(req.body.firstName);
    console.log(req.body.lastName);
})

app.listen(port, function () {
    console.log("server listening on PORT " + port);
});



