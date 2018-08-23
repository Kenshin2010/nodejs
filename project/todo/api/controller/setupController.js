var Todos = require("../models/todoModel");

module.exports = function (app) {
    app.get("/api/setupTodos", function (req,res) {
        //setup seed data
        var seedTodos = [
            {
                text : "Hoc nodejs",
                isDone : false
            },
            {
                text: "Hoc Java",
                isDone : false
            },
            {
                text: "Hoc Android",
                isDone: true

            }
        ];

        Todos.create(seedTodos,function (err, results) {

           res.send(results); 
        });

    });
}