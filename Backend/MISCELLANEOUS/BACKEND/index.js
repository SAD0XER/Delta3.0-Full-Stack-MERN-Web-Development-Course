const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOption = { secret: "BishopTakesRook", resave: false, saveUninitialized: true };

app.use(session(sessionOption));
app.use(flash());

app.get("/register", (req, res) => {
    let { name = "NoName" } = req.query;
    req.session.name = name;
    req.flash("success", "User registered successfully!");
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    res.render("./hello.ejs", { name: req.session.name, flashMsg: req.flash("success") });
});

app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});
