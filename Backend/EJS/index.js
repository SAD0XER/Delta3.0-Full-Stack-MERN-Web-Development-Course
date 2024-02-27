const express = require("express");
const path = require("path");

const app = express();

let port = 8080;

app.set("view engine", "ejs"); //Setting template engine as ejs.
app.set("views", path.join(__dirname, "/views")); //Setting this directory as default for views.

/* This line is listening all request coming from the port & running it's callback function. */
app.listen(port, () => {
  console.log(`Server Started and Listening on port ${port}.`);
});

/* Making Routs */
app.get("/", (req, res) => {
  res.render("index"); //Express by default search files by name, so we don't need to type file name with its exrensions.
});

app.get("/rolldice", (req, res) => {
  let diceValue = Math.floor((Math.random() * 6) + 1);
  res.render("rolldice.ejs", { diceValue });
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params; //It is a destructuring assignment syntax. It's a concise way of extracting a property from an object and assigning it to a variable with the same name.
  const instaData = require("./data.json"); //Requiring JSON data file.
  const data = instaData[username];
if (data) {
  res.render("instagram.ejs", { data });
} else {
  res.render("datanotfound.ejs");
}
});