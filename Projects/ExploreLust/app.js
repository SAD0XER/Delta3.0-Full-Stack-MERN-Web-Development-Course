const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");

// Requiring Express Router files.
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

// Setting for project requirements.
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const MONGO_URL = "mongodb://127.0.0.1:27017/ExploreLust";

// express-session parameters.
const sessionOptions = {
    secret: "Session Secret",
    resave: false,
    saveUninitialized: true,
};

app.use(session(sessionOptions));

/* Database connectivity setup */
main()
    .then(() => {
        console.log("Database connected.");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

// Home Route
app.get("/", (req, res) => {
    res.send("Home route of project ExploreLust is working.");
});

// Express Routers
app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

// Middlewares
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something Went Wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
});

/* Server setup */
app.listen(8080, () => {
    console.log("Server is running on localhost: 8080");
});
