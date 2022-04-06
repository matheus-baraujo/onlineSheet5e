const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.use(bodyParser.urlencoded({extended:true}));

app.use('/css', express.static('css'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/teste", function (req, res) {
    res.sendFile(__dirname + "/views/teste.html");
});

app.post("/", function (req,res) {
    var var1 = req.body.var;
    var var2 = req.body.var2;

    res.send("Pegando duas variaveis post");
});

//url = "";

//https.get(url, function (response) {
    
//});


app.listen(3000, function () {
    console.log("Server started running on port 3000");
});