const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const port = 8080;

app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(express.json()); // parse application/json
app.use(cookieParser()); // Cookie Parser Middleware.

app.get("/", (req, res) => {
    console.dir(req.cookies); // Printing cookie data.
    console.log(req.cookies); // Printing cookie data.
    res.send("Hello, I am Root.")
});

// Storing cookies on browser.
app.get("/getcookie", (req, res) => {
    res.cookie("name", "value");
    res.send("You got some Cookies.");
});

// Using cookies on the web page.
app.get("/getcookiedata", (req, res) => {
    let { name = "nothing" } = req.cookies;
    res.send(`This cookie has ${name}`);
});

app.get("/register", (req, res) => {
    console.log(req.query);
    let { username, password } = req.query; //
    res.send(`Standard GET response. Welcome ${username}!`);
});

app.post("/register", (req, res) => {
    console.log(req.body);
    let { username, password } = req.body;
    res.send(`Standard GET response. Welcome ${username}!`);
});

app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});

