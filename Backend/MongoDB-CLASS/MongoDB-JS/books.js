const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/amazon"); // It connects to a database named "amazon" on the local machine (127.0.0.1) on port 27017.
}

/* Creating Schema for Amazon Books */
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "This is not a valid price..!"] /* Custom Error message. */,
  },
  discout: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"], // Values except in this array will not be accepted.
  },
  genre: [String],
});

/* Creating collections using Schema */
const Book = mongoose.model("Book", bookSchema);

/* Inserting Book data in DB */
const book1 = new Book({
  title: "Yayati",
  author: "Ranajit Desai",
  price: 700,
  category: "non-fiction",
  genre: ["drama", "moral"],
});

book1
  .save()
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error.errors.price.properties.message); // Handling Errors.
  });

Book.findOneAndUpdate(
  { author: "Napoleon Hill" },
  { author: "John Weak" },
  { runValidators: true, new: true },
)
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });
