const express = require("express");
const app = express();

app.get("/", function name(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, function () {
    console.log("Server started running on port 3000");
});