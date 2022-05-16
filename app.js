require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const _ = require('lodash');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use('/public', express.static('public'));
app.set("view engine", "ejs");


var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_BASE
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});



app.route('/')
    .get(function (req, res){
        res.render("index", {route: "index"});
    })

    .post(function(req, res){
        res.redirect("/");
    });

app.get("/lobby/:user", function(req, res){
    const UID = _.lowerCase(req.params.user);

    res.render("user", {
        route: "user",
        UID: UID    
    });
});

app.listen(3000, function () {
    console.log("Server started running on port 3000");
});