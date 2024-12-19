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

// connect-flash: One time msg flash service.
app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

app.get("/register", (req, res) => {
    let { name = "There." } = req.query;
    req.session.name = name;
    if (name === "There.") {
        req.flash("error", "User not registered!");
    } else {
        req.flash("success", "User registered successfully!");
    }
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    res.render("./hello.ejs", { name: req.session.name });
});

app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});
