/* Creating Web Application using Express */
/* It is a basic Express app, you can use this as template to get started. */

const express = require("express"); //Requiring a Express
const app = express(); //It is basically a function.

let port = 8080; //3000

//Middlewares

// Callback in the app.use() middleware function.
app.use("/project", (req, res, next) => { // This middleware will only work when we request for /project page only.
    console.log("I am from the Project Page.");
    next();
});

//Routers
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
