/* Requiring and Importing Packages here. */
const { faker } = require("@faker-js/faker");
const { log } = require("console");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine", "ejs"); //Setting view engine as 'ejs' for express.
app.set("view engine", path.join(__dirname, "/views")); //Setting directory path of '/views' for express.
app.use(methodOverride("_method")); // Enable methodOverride middleware to override HTTP method using _method parameter
app.use(express.urlencoded({ extended: true })); // Enable urlencoded middleware to parse URL-encoded request bodies and make data available as req.body object

// Base Setup: Starting server on port 8080.
app.listen(8080, () => {
  console.log("Listening on port 8080...");
});

/* Setting up connection with DB */
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "#YYql8uccr@24",
});

/* Creating Routes */
// /Home Route: Showing count of all the users.
app.get("/", (req, res) => {
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

// /User Route: Showing all the users.
app.get("/user", (req, res) => {
  let query = "SELECT * FROM user";
  try {
    connection.query(query, (error, users) => {
      if (error) throw error;
      res.render("user.ejs", { users });
    });
  } catch (error) {
    console.log(error);
    res.send("Oops..! Something gone wrong while connecting to datbase.");
  }
});

// /Edit Route: To edit username.
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let query = `SELECT * FROM user WHERE id="${id}"`;
  try {
    connection.query(query, (error, result) => {
      if (error) throw error;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (error) {
    console.log(error);
    res.send("Oops..! Something gone wrong while connecting to datbase.");
  }
});

// /Update Route: To update data in DB.
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPassword, username: newUsername } = req.body;
  let query = `SELECT * FROM user WHERE id="${id}"`;
  try {
    connection.query(query, (error, result) => {
      if (error) throw error;
      let user = result[0];
      if (formPassword != user.password) {
        res.send("WRONG Password!");
      } else {
        let query2 = `UPDATE user SET username="${newUsername}" WHERE id="${id}"`;
        connection.query(query2, (error, result) => {
          if (error) throw error;
          res.redirect("/user");
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.send("Oops..! Something gone wrong while connecting to datbase.");
  }
});

// /new Route: To add new user in DB.
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

// /add new user Route: To add new user in DB.
app.post("/user/new", (req, res) => {
  let { username, email, password, confirmPassword } = req.body;
  let query = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
  let user = [`${faker.string.uuid()}`, username, email, password];

  if (password !== confirmPassword) {
    res.send("Password doesn't match!");
  } else if (password.length < 8) {
    res.send("Password must have atleast 8 characters long!");
  } else {
    try {
      connection.query(query, user, (error, result) => {
        if (error) throw error;
        res.redirect("/user");
      });
    } catch (error) {
      console.log(error);
      res.send("Oops..! Something gone wrong while connecting to datbase.");
    }
  }
});
