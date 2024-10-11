/* Creating Web Application using Express */
/* It is a basic Express app, you can use this as template to get started. */

const express = require("express"); //Requiring a Express
const app = express(); //It is basically a function.

let port = 8080; //3000

//Handling Requests: Listen makes web server that listen incoming API requests.
app.listen(8080, () => {
    console.log(`Server Started: App is litening on port ${port}`);
});

// use(): This Middleware listens all kind of every single requests even request is wrong and it executed.
app.use((req, res) => {
    // let { id } = req.query; // Extracting parameter from request object.
    // console.log(id); // Printing extracted parameter value or query value.
    res.send("Hello, I am Middleware.");
    console.log(123);
});

//Routing
app.get("/", (req, res) => {
    res.send("Hello there!");
});

app.get("/project", (req, res) => {
    console.log("Project response send.");
    res.send("You contacted Project path.");
});
