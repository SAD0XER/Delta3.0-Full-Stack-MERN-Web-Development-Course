/* Creating Web Application using Express */

const express = require("express"); //Requiring a Express
const app = express(); //It is basically a function.

let port = 8080; //3000

//Handling Requests: Listen makes web server that listen incoming API requests.
app.listen(port, () => {
  console.log(`Server Starts: App is litening on port ${port}`);
});

//Sending Response: This method listens every request and execute callback for response.
/* app.use((req, res) => {
  //   console.log(req);
  console.log("Request Recieved.");
  res.send({ status: true, data: [] });
}); */

//Routing
app.get("/", (req, res) => {
  res.send("Well come to my home page.");
});

/* app.get("/project", (req, res) => {
  console.log("Project response send.");
  res.send("You contacted Project path.");
}); */

//To handle another kind of GET requests who are not exist.
/* app.get("*", (req, res) => {
  res.send("page/path does not exist.");
}); */

//Path Parameters: 'req.params' has parameters passed by client.
app.get("/:userName/:userID", (req, res) => {
  // console.log(req.params);
  let { userName, userID } = req.params;
  res.send(`Hello, @${userName}, and your ID is ${userID}`);
});

//Query String
app.get("/search", (req, res) => {
  console.log(req.query);
  let { q, q2 } = req.query;

  //If query does not found.
  if (!q) {
    res.send("No query found.");
  }
  res.send(`Your queries are ${q} ${q2}`);
});
