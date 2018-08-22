var express = require("express");
var cookieParser = require("cookie-parser");

var mongoose = require("mongoose");
// var mysql = require("mysql");
// var bodyParser = require('body-parser');

var apiController = require("./controllers/apiController");
var homeController = require("./controllers/homeController");

var app = express();


var port = 3000;
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// // create application/json parser
// var jsonParser = bodyParser.json()



mongoose.connect("mongodb://test:android123@ds229732.mlab.com:29732/manroiddb")
var Schema = mongoose.Schema;
var personSchema = new Schema({
    fistName: String,
    lastName: String,
    address: String

})

var Person = mongoose.model("Person",personSchema);





app.use("/assets", express.static(__dirname + "/public"));
app.use(cookieParser());
app.set("view engine", "ejs");


//custom middleware base
app.use("/", function (req, res, next) {
    console.log("Request Url : " + req.url);
    req.requestTime = new Date();



    //create a obj
    var hoa = Person({
        fistName : "Hoa",
        lastName : "Mai",
        address : "HA NOI"
    });

    hoa.save(function (err) {
        if(err) throw err;
        console.log("Hoa created ... !");
    });

    var phuong = Person({
        fistName : "PHuong",
        lastName : "Yen",
        address : "HA NOI"
    });

    phuong.save(function (err) {
        if(err) throw err;
        console.log("PHuong created ... !");
    });

    next();
})


//custom middleware for sql test xampp
// app.use("/", function (req, res, next) {
//     console.log("Request Url : " + req.url);
//     req.requestTime = new Date();

//     var connecttion = mysql.createConnection({
//         host: "localhost",
//         user: "",
//         password: "",
//         database: "test"
//     });

//     connecttion.connect();

//     // connecttion.query(`SELECT * FROM tbl_sinhvien`, function (err,rows)
//     connecttion.query("SELECT * FROM tbl_sinhvien WHERE MASV = 'SV001'", function (err, rows) {
//         if (err) {
//             throw err;
//         }

//         console.log(rows[0].TEN);
//     });

//     connecttion.end();

//     next();
// })


apiController(app);
homeController(app);


app.listen(port, function () {
    console.log("server listening on PORT " + port);
});






