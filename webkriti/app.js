var express = require("express"),
app = express();

app.set("view engine", "ejs");


app.get("/home", function (req, res) {
    res.render("home")
})

app.get("/", function (req, res) {
    res.render("home")
})

app.get("/loginasuser", function (req, res) {
    res.render("loginasuser")
})

app.get("/service", function (req, res) {
    res.render("service")
})














app.listen("3000", function () {
    console.log("server has started at port 3000")
})