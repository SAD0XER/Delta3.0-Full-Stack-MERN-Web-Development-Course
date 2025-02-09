const express = require("express");
const router = express.Router();
exports.router = router;
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../utils/middleware.js");
const listingController = require("../controllers/listing.js");

// New Listing Form Route: /listings/new - To create a new listing.
router.get("/new", isLoggedIn, listingController.newListingForm);

// New form Route: /listings/:id/edit - To edit listing.
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editListingForm));

router
    .route("/")
    .get(wrapAsync(listingController.index)) // Index Route: /listings - To see all Listings.
    .post(isLoggedIn, validateListing, wrapAsync(listingController.saveNewListing)); // Create Route: /listings - To create a new listing in DB.

router
    .route("/:id")
    .get(wrapAsync(listingController.showListingDetails)) // Show Route: /listings/:id - To see a single list.
    .put(isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing)) // Update Route: /listings/:id - To update data in DB.
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing)); // Delete Route: /listings/:id - To delete listing from DB.

module.exports = router;
