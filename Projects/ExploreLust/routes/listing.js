const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../utils/middleware.js");

// Index Route: /listings - To see all titles.
router.get(
    "/",
    wrapAsync(async (req, res) => {
        const allListings = await Listing.find({}); //To extract all listing data from database.
        res.render("../views/listings/index.ejs", { listings: allListings }); //Passing all listings to index.ejs with key name as `listings`.
    }),
);

// New Form Route: /listings/new - To create a new listing.
router.get("/new", isLoggedIn, (req, res) => {
    res.render("../views/listings/new.ejs");
});

// Show Route: /listings/:id - To see a single list.
router.get(
    "/:id",
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        const listing = await Listing.findById(id).populate("reviews").populate("owner"); // populate method to get actual documents from the references stored in 'reviews' etcetera.

        // Handling case if listing does not found.
        if (!listing) {
            req.flash("error", "Requested list does not exist!");
            res.redirect("/listings");
        }
        res.render("../views/listings/show.ejs", { listing });
    }),
);

// Create Route: /listings/new - To create a new listing in DB.
router.post(
    "/new",
    isLoggedIn,
    validateListing,
    wrapAsync(async (req, res, next) => {
        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        await newListing.save();
        req.flash("success", "New Listing Added!");
        res.redirect("/listings");
    }),
);

// New form Route: /listings/:id/edit - To edit listing.
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        const listing = await Listing.findById(id);

        // Handling case if editing list does not found.
        if (!listing) {
            req.flash("error", "Requested editing list does not exist!");
            res.redirect("/listings");
        }
        res.render("../views/listings/edit.ejs", { listing });
    }),
);

// Update Route: /listings/:id/edit - To update data in DB.
router.put(
    "/:id",
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });
        req.flash("success", "Listing Updated!");
        res.redirect(`/listings/${id}`);
    }),
);

// Delete Route: /listings/:id/delete - To delete listing from DB.
router.delete(
    "/:id/delete",
    isLoggedIn,
    isOwner,
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        await Listing.findByIdAndDelete(id);
        req.flash("success", "Listing Deleted!");
        res.redirect(`/listings`);
    }),
);

module.exports = router;
