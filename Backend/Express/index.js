/* Creating Web Application using Express */
/* It is a basic Express app, you can use this as template to get started. */

const express = require("express"); //Requiring a Express
const app = express(); //It is basically a function.

let port = 8080; //3000

//Middlewares

//Routers
app.get("/", (req, res) => {
    res.send("Hello there!");
});

app.get("/err", (req, res) => {
    asdf = asdf;
});

/* Error Handling Middlewares (Custom) */
app.use((err, req, res, next) => {
    console.log("------ERROR------");
    next(err);
});

app.use((err, req, res, next) => { // Next error handler middleware.
    console.log("ERROR------ERROR");
    next(err);
});

//Handling Requests: Listen makes web server that listen incoming API requests.
app.listen(8080, () => {
    console.log(`Server Started: App is litening on port ${port}`);
});
