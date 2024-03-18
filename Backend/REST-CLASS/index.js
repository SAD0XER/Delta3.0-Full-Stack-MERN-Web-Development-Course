const express = require("express");
const path = require("path");
const methodOverride = require("method-override"); // To override basic HTTP methods (GET, POST etc.)
const app = express();
const { v4: uuidv4 } = require('uuid'); // To generate random unique IDs.

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

app.get("/", (req, res) => { /* Showing Home page */
    res.render("index.ejs");
});

// const database = JSON.parse(localStorage.getItem("database")) || [];

let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        imgUrl: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/6efdd5e7f0d663cf231d0f2040be0a1e.png",
        caption: "Do Not Stop unil the goal is reached.",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus porro officiis ratione perspiciatis eius quam labore modi nulla assumenda? Ullam perspiciatis quod dolor optio perferendis nam laboriosam earum voluptatem! Iste."
    },
    {
        id: uuidv4(),
        username: "Aman Dhattarwal",
        imgUrl: "https://media.licdn.com/dms/image/C4E03AQFAoY-MSYJsCA/profile-displayphoto-shrink_200_200/0/1600154261501?e=2147483647&v=beta&t=KCZ2mZI2NmPmkVmD1u_cQN9z0vGpTvYRuAwbbUfgX24",
        caption: "Tu Phodega!",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus porro officiis ratione perspiciatis eius quam labore modi nulla assumenda? Ullam perspiciatis quod dolor optio perferendis nam laboriosam earum voluptatem! Iste."
    },
    {
        id: uuidv4(),
        username: "Shrasha Khapra",
        imgUrl: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/fcc79fff0a31cd4c6290d3d3ada29edf.png",
        caption: "Success requires hardwork.",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus porro officiis ratione perspiciatis eius quam labore modi nulla assumenda? Ullam perspiciatis quod dolor optio perferendis nam laboriosam earum voluptatem! Iste."
    }
];

app.get("/posts", (req, res) => { /* Getting/Showing all Posts. */
    res.render("post.ejs", { posts });
});

app.get("/posts/new", (req, res) => { /* Showing form for creating a new post. */
    res.render("new.ejs");
});

app.get("/posts/:id", (req, res) => { /* Showing post in detail using it's respective user ID. */
    let { id } = req.params;
    let post = posts.find((post) => id === post.id);
    res.render("show.ejs", { post });
});

app.get("/posts/:id/edit", (req, res) => { /* Showing form for edit a post. */
    let { id } = req.params;
    let post = posts.find((post) => id === post.id);
    res.render("edit.ejs", { post });
});

app.post("/posts", (req, res) => { /* Creating a new post and adding to existing list of posts. */
    // console.log(req.body); // Logs data sent by user in request body.
    let { username, imgUrl, caption, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, imgUrl, caption, content });
    res.redirect("/posts");
});

app.patch("/posts/:id", (req, res) => { /* Updating an existing post with the edited details. */
    let { id } = req.params; // Get the :id from URL parameters.
    /* Getting data from request body to update it. */
    let newImgUrl = req.body.imgUrl;
    let newCaption = req.body.caption;
    let newContent = req.body.content;
    let post = posts.find((post) => id === post.id); // Find the post that matches the given ID.
    /* Updating the fields if they exist in the request body. */
    post.imgUrl = newImgUrl;
    post.caption = newCaption;
    post.content = newContent;
    res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

