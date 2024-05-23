const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "#YYql8uccr@24",
});

try {
  connection.query("SHOW TABLES", (error, result) => {
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
