var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");

var app = express();

mongoose.connect("mongodb://localhost:27017/todolist");

mongoose.connection.on("connected",()=>{
console.log("I am connected to database");
});

app.use(cors());

app.use(bodyparser.json());

app.use("/tasks", require("./routes/tasks"));


var port = 3000;

app.get("/",(req,res)=>{console.log("Someone may get the call");
res.send("Welcome to do list");
})

app.listen(port,()=>{
    console.log("I am running on port :: ",port);
})