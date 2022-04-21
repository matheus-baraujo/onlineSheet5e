const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.use(bodyParser.urlencoded({extended:true}));
app.use('/css', express.static('css'));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    //res.sendFile(__dirname + "/views/index.html");
    res.render("index", {route: "index"});
});

app.post("/", function(req, res){
    res.redirect("/");
});

app.get("/user", function(req, res){
    res.render("user", {route: "user"});
});

app.listen(3000, function () {
    console.log("Server started running on port 3000");
});