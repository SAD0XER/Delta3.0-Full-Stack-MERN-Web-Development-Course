const express = require("express"); //Requiring a Express
const app = express(); //It is basically a function.
const ExpressError = require("./ExpressError");

let port = 8080; //3000

//Middlewares
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new ExpressError(401, "ACCESS_DENIED");
};

//Routers
app.get("/", (req, res) => {
    res.send("Hello there!");
});

app.get("/err", (req, res) => {
    asdf = asdf;
});

app.get("/api", checkToken, (req, res) => {
    res.send("Your Data is here.");
});

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Admin access is forbiddne.");
});

/* Error Handling Middlewares (Custom) */
app.use((err, req, res, next) => {
    let { status = 500, message = "some error occurred there." } = err;
    res.status(status).send(message);
});

//Handling Requests: Listen makes web server that listen incoming API requests.
app.listen(8080, () => {
    console.log(`Server Started: App is litening on port ${port}`);
});
