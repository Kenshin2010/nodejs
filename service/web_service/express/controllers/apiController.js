

module.exports = function (app) {
    app.get("/api/user/:id", function (req, res) {
        //get data from database
        // res.render("user", { ID: req.params.id, queryString: req.query.qstr });
        var result = {
            fisrtName: "Mai",
            lastName: "Hoa"
        }
        res.json(result);
    })

    app.post("/api/user", function (req, res) {
        //create new and save to the db

    })

    app.put("/api/user", function (req, res) {
        //update new and save to the db

    })


    app.delete("/api/user/:id", function (req, res) {
        //delete user from db

    })
}