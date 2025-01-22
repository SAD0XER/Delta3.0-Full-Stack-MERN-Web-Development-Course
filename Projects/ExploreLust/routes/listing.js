const express = require("express");
const router = express.Router();
exports.router = router;
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../utils/middleware.js");
const listingController = require("../controllers/listing.js");

// Index Route: /listings - To see all titles.
router.get("/", wrapAsync(listingController.index));

// New Listing Form Route: /listings/new - To create a new listing.
router.get("/new", isLoggedIn, listingController.newListingForm);

// Show Route: /listings/:id - To see a single list.
router.get("/:id", wrapAsync(listingController.showListingDetails));

// Create Route: /listings/new - To create a new listing in DB.
router.post("/new", isLoggedIn, validateListing, wrapAsync(listingController.saveNewListing));

// New form Route: /listings/:id/edit - To edit listing.
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editListingForm));

// Update Route: /listings/:id/edit - To update data in DB.
router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing));

// Delete Route: /listings/:id/delete - To delete listing from DB.
router.delete("/:id/delete", isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

module.exports = router;
