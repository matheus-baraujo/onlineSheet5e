const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.post("/", function (req,res) {
    var var1 = req.body.var;
    var var2 = req.body.var2;

    res.send("Pegando duas variaveis post");
});

app.listen(3000, function () {
    console.log("Server started running on port 3000");
});