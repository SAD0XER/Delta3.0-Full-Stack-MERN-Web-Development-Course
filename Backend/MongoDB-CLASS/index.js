const mongoose = require("mongoose");

main()
  .then(() => { /* If promise is fulfiled then this() method will called. */
    console.log("Connection Successful!");
  })
  .catch((err) => console.log(err)); // If promise is rejected then catch() method will called.

async function main() { /* It is a async function that returns promise. */
  mongoose.connect("mongodb://127.0.0.1:27017/test"); // It connects to a database named "test" on the local machine (127.0.0.1) on port 27017.
}

/* Creating Schema for collection. */
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

/* Creating collection using Schema. */
const User = mongoose.model("User", userSchema);

/* Inserting Single user data in DB. */
/* const user1 = new User({
  name: "Ashok",
  email: "ashok@yahoo.com",
  age: 60,
}); */

/* Saving it into DB. */
/* user1
  .save()
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  }); */

/* Inserting Multiple user data in DB. */
User.insertMany([
  { name: "Priyanka", email: "priyanka@yahoo.com", age: 30 },
  { name: "Pallavi", email: "pallavi@yahoo.com", age: 26 },
  { name: "Sarvesh", email: "sarvesh@yahoo.com", age: 18 },
])
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });
