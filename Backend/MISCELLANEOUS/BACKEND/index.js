const express = require("express");
const app = express();
const session = require("express-session");
const port = 8080;

const sessionOption = { secret: "BishopTakesRook", resave: false, saveUninitialized: true };

app.use(session(sessionOption));

app.get("/register", (req, res) => {
    let { name = "NoName" } = req.query;
    req.session.name = name;
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    res.send(`Hello, ${req.session.name}`);
});

app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});
