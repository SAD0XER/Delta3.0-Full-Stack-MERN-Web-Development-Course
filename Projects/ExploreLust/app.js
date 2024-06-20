const express = require("express");
const mongoose = require("mongoose");

const app = express();

const MONGO_URL = "mongodb://127.0.0.1:27017/ExploreLust";

/* Server setup */
app.listen(8080, () => {
  console.log("Server is running on localhost: 8080");
});

/* Database connectivity setup */
main()
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

/* All Routes */
// home route
app.get("/", (req, res) => {
  res.send("Home route of project ExploreLust is working.");
});
