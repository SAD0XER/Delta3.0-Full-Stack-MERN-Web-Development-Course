/* Requiring and Importing Packages here. */
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express")();
const path = require("path");

// Base Setup: Starting server on port 8080.
express.listen(8080, () => {
  console.log("Listening on port 8080...");
});

express.set("view engine", "ejs"); //Setting view engine as 'ejs' for express.
express.set("view engine", path.join(__dirname, "/views")); //Setting directory path of '/views' for express.

/* Setting up connection with DB */
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "#YYql8uccr@24",
});

/* Creating Routes */
// /Home Route: Showing count of all the users.
express.get("/", (req, res) => {
  let query = "SELECT count(*) FROM user";
  try {
    connection.query(query, (error, result) => {
      if (error) throw error;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (error) {
    console.log(error);
    res.send("Oops..! Something gone wrong while connecting to datbase.");
  }
});

/* Function to get random user data */
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
