const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

/* Path setup */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* Server setup */
app.listen(8080, () => {
  console.log("Server is running on localhost:8080");
});

/* Database connectivity setup */
main()
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/LetChat");
}

/* Routes: Home route */
app.get("/", (req, res) => {
  res.send("Home route is working.");
});
