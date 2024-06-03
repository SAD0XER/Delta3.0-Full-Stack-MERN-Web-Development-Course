const mongoose = require("mongoose");

main()
  .then(() => { /* If promise is fulfiled then this() method will called. */
    console.log("Connection Successful!");
  })
  .catch((err) => console.log(err)); // If promise is rejected then catch() method will called.

async function main() { /* It is a async function that returns promise. */
  mongoose.connect("mongodb://127.0.0.1:27017/test"); // It connects to a database named "test" on the local machine (127.0.0.1) on port 27017.
}
