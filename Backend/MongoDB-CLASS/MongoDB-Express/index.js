const express = require("express");
const { constants } = require("http2");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

const app = express();

/* Path setup */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

/* Server setup */
app.listen(8080, () => {
  console.log("Server is running on localhost:8080");
});

/* Database connectivity setup */
main()
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/LetChat");
}

/* All Routes */
// home route
app.get("/", (req, res) => {
  res.send("Home route is working.");
});

// /chats: To see all chats.
app.get("/chats", async (req, res) => {
  let chats = await Chat.find(); //To extract all chat data from database.
  res.render("index.ejs", { chats });
});
