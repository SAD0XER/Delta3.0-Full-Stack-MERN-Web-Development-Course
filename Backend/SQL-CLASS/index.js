/* Requiring and Importing Packages here. */
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

/* Setting up connection with DB */
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "#YYql8uccr@24",
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

// Inserting data in bulk into DB using Faker Package.
let query = "INSERT INTO user (id, username, email, password) VALUES ?";

let data = []; //To store user data from Faker Package.

for (let i = 1; i <= 100; i++) { //Loop to call 'getRandomUser()' many times.
  data.push(getRandomUser()); //Pushing fake users data into 'data' named Array.
}

try {
  connection.query(query, [data], (error, result) => {
    if (error) throw error;
    console.log(result);
  });
} catch (error) {
  console.log(error);
}

connection.end();
