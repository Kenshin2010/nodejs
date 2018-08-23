var Todos = require("../models/todoModel");

function getTodos(res) {
    Todos.find(function (err, todos) {
        if (err) {
            res.status(500).json(err)
        } else {
            res.json(todos);
        }
    });

}


module.exports = function (app) {

    
    //get all todo
    app.get("/api/todos", function (req, res) {
        getTodos(res);
    });


    // /api/todo/123456
    app.get("/api/todo/:id", function (req, res) {
        Todos.findById({ _id: req.params.id }, function (err, todo) {
            if (err) {
                throw err;
            } else {
                res.json(todo);
            }
        });

    });

    /**
     * create a todo
     */

    app.post("/api/todo", function (req, res) {
        var todo = {
            text: req.body.text,
            isDone: req.body.isDone
        };


        Todos.create(todo, function (err, todo) {
            if (err) {
                throw err;
            } else {
                getTodos(res);
            }

        });

    });


    // update todo
    app.put("/api/todo", function (req, res) {
        if (!res.body.id) {
            return res.status(500).send("Id is require");
        } else {
            Todos.update({
                _id: req.body.id
            }, {
                    text: req.body.text,
                    isDone: req.body.isDone
                }, function (err, todo) {
                    if (err) {
                        return res.status(500).json(err);
                    } else {
                        getTodos(res);
                    }
                }
            );
        }
    });

    //delete todo
    app.delete("/api/todo/:id", function (req, res) {

        Todos.remove({
            _id: req.params.id
        }, function (err, todo) {
            if (err) {
                return res.status(500).json(err);
            } else {
                getTodos(res);
            }
        }

        );

    });


}