const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const MONGO_URL = "mongodb://127.0.0.1:27017/ExploreLust";

/* Server setup */
app.listen(8080, () => {
    console.log("Server is running on localhost: 8080");
});

/* Database connectivity setup */
main()
    .then(() => {
        console.log("Database connected.");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

/* All Routes */
// home route
app.get("/", (req, res) => {
    res.send("Home route of project ExploreLust is working.");
});

// Index Route: /listings - To see all titles.
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({}); //To extract all listing data from database.
    res.render("./listings/index.ejs", { listings: allListings }); //Passing all listings to index.ejs with key name as `listings`.
});

// New Form Route: /listings/new - To create a new listing.
app.get("/listings/new", (req, res) => {
    res.render("./listings/new.ejs");
});

// Show Route: /listings/:id - To see a single list.
app.get("/listings/:id", async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/show.ejs", { listing });
});

// Create Route: /listings/new - To create a new listing in DB.
app.post("/listings/new", async (req, res) => {
    // let { title, description, price, location, country } = req.body; // This is the old way of getting form data.
    /* This is the new way of getting form data.
    Here we are taking data from `req.body.listing` object and passing it to Listing model and saving it to DB. */
    await new Listing(req.body.listing).save();
    res.redirect("/listings");
});

// New form Route: /listings/:id/edit - To edit listing.
app.get("/listings/:id/edit", async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs", { listing });
});

// Update Route: /listings/:id/edit - To update data in DB.
app.put("/listings/:id", async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
});
