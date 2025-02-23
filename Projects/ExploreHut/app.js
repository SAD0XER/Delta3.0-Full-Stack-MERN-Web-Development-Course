// Check for NODE_ENV is not set on "production".
if (process.env.NODE_ENV != "production") require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

// Requiring Express Router files.
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

// Setting for project requirements.
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const cloudDatabaseUrl = process.env.ATLAS_DB_URL; // Connection link of Cloud MongoDB (Atlas) Database.

// MongoDB session store for 'Connect' and 'Express'.
const store = MongoStore.create({
    mongoUrl: cloudDatabaseUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

// Handling Error if session store fails.
store.on("error", () => {
    console.log("ERROR in MONGO SESSION STORE!");
    console.log(error);
    console.error(error);
});

// express-session parameters.
const sessionOptions = {
    store: store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: Date.now() + 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); // It is to use static authenticate method of model in LocalStrategy.

// use static serialize and deserialize of model for passport session support.
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flsh Message Middleware.
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user; // Storing current User in locals so that can be accessed everywhere.
    next();
});

// Express Routers
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// Middlewares
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something Went Wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
});

/* Database connectivity setup */
async function main() {
    await mongoose.connect(cloudDatabaseUrl);
    console.log("Database connected.");
}

main().catch((err) => console.log(err));

/* Server setup */
app.listen(8080, () => {
    console.log("Server is running on localhost: 8080");
});
