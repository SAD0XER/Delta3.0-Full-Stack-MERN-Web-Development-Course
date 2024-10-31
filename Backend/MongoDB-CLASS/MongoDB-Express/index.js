const express = require("express");
const { constants } = require("http2");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const app = express();
const ExpressError = require("./ExpressError.js");

/* Path setup */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // Enables URL-encoded body parsing.
app.use(methodOverride("_method"));

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
  try {
    res.send("Home route is working.");
  } catch (error) {
    next(error);
  }
});

// /chats: To see all chats.
app.get("/chats", async (req, res) => {
  try {
    let chats = await Chat.find(); //To extract all chat data from database.
    res.render("index.ejs", { chats });
  } catch (error) {
    next(error);
  }
});

// GET /chats/new: To render new chat form.
app.get("/chats/new", (req, res) => {
  try {
    res.render("new.ejs");
  } catch (error) {
    next(error);
  }
});

// POST /chats/new: To insert new chat data in DB.
app.post("/chats/new", async (req, res, next) => {
  try {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      message: msg,
      created_at: new Date(),
      updated_at: new Date(),
    });

    // newChat
    //   .save()
    //   .then((resolve) => {
    //     console.log(resolve, "Chat saved!");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    await newChat.save(); // Using async/await for better readability instead of promise chaining.
    res.redirect("/chats");
  } catch (error) {
    next(error);
  }
});

// GET /chats/:id/edit - To render edit form.
app.get("/chats/:id/edit", async (req, res, next) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) next(new ExpressError(500, "Chat Not Found!")); // Handling Error if id is incorrect.
    res.render("edit.ejs", { chat });
  } catch (error) {
    next(error);
  }
});

// PUT /chats/:id - To update new data in DB.
app.put("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { msg: newMessage } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { message: newMessage, updated_at: new Date() },
      { runValidators: true, new: true },
    );
    console.log(updatedChat);
    res.redirect("/chats");
  } catch (error) {
    next(error);
  }
});

// DELETE /chats/:id - To delete chat from DB.
app.delete("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
  } catch (error) {
    next(error);
  }
});

// Error handling middleware.
app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occurred" } = err;
  res.status(status).send(message);
});

/* Server setup */
app.listen(8080, () => {
  console.log("Server is running on localhost:8080");
});
