const express = require("express");
const path = require("path");
const app = express();

const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // to support JSON-encoded bodies.
app.use(express.static(path.join(__dirname, "/public"))); // Serve static files from the public folder.

app.set("view engine", "ejs");
app.set("view engine", path.join(__dirname, "views"));

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})

app.get("/", (req, res) => {
    res.send("Server is live.");
});

let posts = [
    {
        username: "apnacollege",
        content: "Do Not Stop unil the goal is reached."
    },
    {
        username: "Aman Dhattarwal",
        content: "Tu Phodega!"
    },
    {
        username: "Shrasha Khapra",
        content: "Success requires hardwork."
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});