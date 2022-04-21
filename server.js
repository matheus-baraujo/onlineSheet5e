const express = require("express");


//App functions
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

const https = require("https");

//Database implementation
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vcom1998g",
    database: "5esheets"
});

//Adding MD5 hash encoder and decoder
const crypto = require('crypto');

//adding the css files
app.use(express.static('public'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.post("/login", function (req,res) {
    var username = req.body.username;
    var password = crypto.createHash('md5').update(req.body.password).digest("hex");

    con.connect(function(err) {
        if (err) throw err;
        var query = "SELECT * FROM usuarios WHERE login = '"+username+"'"+" AND password = '"+password+"'";
        con.query(query, function (err, result, fields) {
          if (err) throw err;
          
          console.log(result);
        });
    });

    res.send(texto);
});

//url = "";

//https.get(url, function (response) {
    
//});


app.listen(3000, function () {
    console.log("Server started running on port 3000");
});