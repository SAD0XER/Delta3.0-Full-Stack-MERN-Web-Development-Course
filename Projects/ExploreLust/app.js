const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public"))); // configuring Express.js to serve static files from the /public directory.

const MONGO_URL = "mongodb://127.0.0.1:27017/ExploreLust";

/* Database connectivity setup */
main()
    .then(() => {
        console.log("Database connected.");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

// Schema Validator Middleware
const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body); // Validating data inside req.body using joi's schema.
    if (error) {
        throw new ExpressError(400, error.message); // If there is error, then throw it.
    } else {
        next(); // If there is no error, call next middleware.
    }
};

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error.message);
    } else {
        next();
    }
};

/* All Routes */
// home route
app.get("/", (req, res) => {
    res.send("Home route of project ExploreLust is working.");
});

// Index Route: /listings - To see all titles.
app.get(
    "/listings",
    wrapAsync(async (req, res) => {
        const allListings = await Listing.find({}); //To extract all listing data from database.
        res.render("./listings/index.ejs", { listings: allListings }); //Passing all listings to index.ejs with key name as `listings`.
    }),
);

// New Form Route: /listings/new - To create a new listing.
app.get("/listings/new", (req, res) => {
    res.render("./listings/new.ejs");
});

// Show Route: /listings/:id - To see a single list.
app.get(
    "/listings/:id",
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        const listing = await Listing.findById(id);
        res.render("./listings/show.ejs", { listing });
    }),
);

// Create Route: /listings/new - To create a new listing in DB.
app.post(
    "/listings/new",
    validateListing,
    wrapAsync(async (req, res, next) => {
        await new Listing(req.body.listing).save();
        res.redirect("/listings");
    }),
);

// New form Route: /listings/:id/edit - To edit listing.
app.get(
    "/listings/:id/edit",
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        const listing = await Listing.findById(id);
        res.render("./listings/edit.ejs", { listing });
    }),
);

// Update Route: /listings/:id/edit - To update data in DB.
app.put(
    "/listings/:id",
    validateListing,
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });
        res.redirect(`/listings/${id}`);
    }),
);

// Delete Route: /listings/:id/delete - To delete listing from DB.
app.delete(
    "/listings/:id/delete",
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        let deleted = await Listing.findByIdAndDelete(id);
        console.log(deleted);
        res.redirect(`/listings`);
    }),
);

// Review Route: /listings/:id/reviews - To add review in respective listing.
app.post(
    "/listings/:id/reviews",
    validateReview,
    wrapAsync(async (req, res) => {
        let listing = await Listing.findById(req.params.id);
        let newReview = new Review(req.body.review);

        listing.reviews.push(newReview);

        await newReview.save();
        await listing.save();

        res.redirect(`/listings/${listing._id}`);
    }),
);

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
