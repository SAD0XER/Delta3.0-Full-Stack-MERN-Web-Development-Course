const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const app = express();
const { v4: uuidv4 } = require('uuid');

const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // to support JSON-encoded bodies.
app.use(express.static(path.join(__dirname, "/public"))); // Serve static files from the public folder.
app.use(methodOverride("_method")); // Override with query parameter `_method`.

app.set("view engine", "ejs");
app.set("view engine", path.join(__dirname, "views"));

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

app.get("/", (req, res) => {
    res.send("Server is live.");
});

let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "Do Not Stop unil the goal is reached."
    },
    {
        id: uuidv4(),
        username: "Aman Dhattarwal",
        content: "Tu Phodega!"
    },
    {
        id: uuidv4(),
        username: "Shrasha Khapra",
        content: "Success requires hardwork."
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

app.post("/posts", (req, res) => {
    // console.log(req.body); // Logs data sent by user in request body.
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

