/* Steps to use MongoDB in Mongoose with CRUD operations. */

// Step 1: Requiring Mongoose in this file.
const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => console.log(err));

async function main() {
  /* It is a async function that returns promise. */
  mongoose.connect("mongodb://127.0.0.1:27017/test"); // It connects to a database named "test" on the local machine (127.0.0.1) on port 27017.
}

/* Step 2: Creating Schema for collection. */
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

/* Step 3: Creating collection using Schema. */
const User = mongoose.model("User", userSchema);

/* Step 4: Inserting Single user data in DB. */
const user1 = new User({
  name: "Ashok",
  email: "ashok@yahoo.com",
  age: 60,
});

/* Step 5: Saving it into DB. */
user1
  .save()
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });

/* Step 6: Inserting Multiple user data in DB. */
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

/* Step 7: Find data in DB. */
User.find({ age: { $gt: 40 } })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });

User.findOne({ age: { $lt: 40 } })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });

User.findById("665d7cd5e97f656629126fcd")
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });

/* Step 8: Update in DB. */
User.updateOne({ name: "Anjali" }, { age: 50 })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });

User.updateMany({ age: { $lte: 30 } }, { age: 100 })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });

User.findOneAndUpdate({ name: "Ashok" }, { age: 40 }, { new: true })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });

User.findByIdAndUpdate("665d7cd5e97f656629126fcd", { age: 16 }, { new: true })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });

/* Step 9: Delete in DB. */
User.deleteOne({ name: "Anjali" })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });

User.deleteMany({ age: 100 })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });

User.findByIdAndDelete("665d7772b966b451751844a0")
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });

User.findOneAndDelete({ name: "Sarvesh" })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });
