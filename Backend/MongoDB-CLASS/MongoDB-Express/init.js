const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

/* Database connectivity setup */
main()
  .then(() => {
    console.log("Database connected.\nAll data Pushed to Database.");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/LetChat");
}

let allChats = [
  {
    from: "sarvesh",
    to: "Mahadev",
    message: "How can I become like you?",
    created_at: new Date(),
  },
  {
    from: "captain",
    to: "tony",
    message: "Hi, Tony",
    created_at: new Date(),
  },
  {
    from: "tony",
    to: "bruce",
    message: "Hi, Hulk",
    created_at: new Date(),
  },
  {
    from: "soap",
    to: "ghost",
    message: "lt, are you ugly?",
    created_at: new Date(),
  },
  {
    from: "makarov",
    to: "price",
    message: "It's not good captain, you will pay for this.",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
