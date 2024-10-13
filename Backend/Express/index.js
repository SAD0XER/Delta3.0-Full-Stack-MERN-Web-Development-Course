/* Creating Web Application using Express */
/* It is a basic Express app, you can use this as template to get started. */

const express = require("express"); //Requiring a Express
const app = express(); //It is basically a function.

let port = 8080; //3000

// use(): This Middleware listens all kind of every single requests even request is wrong and it executed.
app.use(
    (req, res, next) => {
        console.log(1.1);
        next(); // This line is important to prevent the request from being stuck in the middleware.
        console.log("after1.1"); // Writing code after next() is not a good practice.
    },
    (req, res, next) => {
        console.log(1.2);
        return next(); // Developers returns the next(), so code after the next() should not run.
        console.log("after1.2"); // Writing code after next() is not a good practice.
    },
    (req, res, next) => {
        console.log(1.3);
        next();
        console.log("after1.3");
    },
);

app.use((req, res, next) => {
    console.log(2.1);
    next();
    console.log("after2.1");
}); // Observe the output of this code.

//Routing
app.get("/", (req, res) => {
    res.send("Hello there!");
});

app.get("/project", (req, res) => {
    console.log("Project response send.");
    res.send("You contacted Project path.");
});

//Handling Requests: Listen makes web server that listen incoming API requests.
app.listen(8080, () => {
    console.log(`Server Started: App is litening on port ${port}`);
});
