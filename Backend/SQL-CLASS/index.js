const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "#YYql8uccr@24",
});

// Inserting new data.
let query = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [
  ["1", "user1", "user1@mail.com", "user@001"],
  ["2", "user2", "user2@mail.com", "user@002"],
];

try {
  connection.query(query, [users], (error, result) => {
    if (error) throw error;
    console.log(result);
  });
} catch (error) {
  console.log(error);
}

connection.end();

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};
