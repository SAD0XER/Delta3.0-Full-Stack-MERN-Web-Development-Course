/* Creating Web Application using Express */
/* It is a basic Express app, you can use this as template to get started. */

const express = require("express"); //Requiring a Express
const app = express(); //It is basically a function.

let port = 8080; //3000

// Middleware

// Logger: This utility middleware method used to log info. about the client. Example: npm package morgan.
app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.path, req.hostname, req.time);
    next();
}); // If you write middleware after the routers the it will not work.

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
