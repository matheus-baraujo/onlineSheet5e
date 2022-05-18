require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const _ = require('lodash');
const mysql = require('mysql');
const md5 = require('md5');

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

app.route('/')
    .get(function (req, res){
        res.render("index", {route: "index"});
    })

    .post(function(req, res){
        res.redirect("/");
    });

app.route('/login')
    .post(function (req, res){
        let username = req.body.username;
        let password = md5(req.body.password);

        const queryLogin = "SELECT * FROM usuarios WHERE login = '"+username+"' AND password = '"+password+"'";

        var query = con.query(queryLogin, function(err, result) {
            if (err) throw err;
            if(result.length == 1){
                let url = "/lobby/"+result[0].id_login;
                res.redirect(url);
            }else{
                res.redirect("/")
            }
        });

    });


app.get("/lobby/:user", function(req, res){
    const UID = _.lowerCase(req.body.user);

    res.render("user", {
        route: "user",
        UID: UID    
    });
});

app.listen(3000, function () {
    console.log("Server started running on port 3000");
});