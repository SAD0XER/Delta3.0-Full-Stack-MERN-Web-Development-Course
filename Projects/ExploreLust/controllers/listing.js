const Listing = require("../models/listing.js");

// Index Route Callback to see all Listings.
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({}); //To extract all listing data from database.
    res.render("../views/listings/index.ejs", { listings: allListings }); //Passing all listings to index.ejs with key name as `listings`.
};

// New Form to Create new Listings.
module.exports.newListingForm = (req, res) => {
    res.render("../views/listings/new.ejs");
};

// Show Listing Details.
module.exports.showListingDetails = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");

    // Handling case if listing does not found.
    if (!listing) {
        req.flash("error", "Requested list does not exist!");
        res.redirect("/listings");
    }
    res.render("../views/listings/show.ejs", { listing });
};

// Create and Save new Listing in DB.
module.exports.saveNewListing = async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    const { path: url, filename } = req.file;
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    await newListing.save();
    req.flash("success", "New Listing Added!");
    res.redirect("/listings");
};

// New Form to Edit Listing.
module.exports.editListingForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    // Handling case if editing list does not found.
    if (!listing) {
        req.flash("error", "Requested editing list does not exist!");
        res.redirect("/listings");
    }

    let previewImage = listing.image.url.replace("/upload", "/upload/c_auto,h_200,w_400");
    res.render("../views/listings/edit.ejs", { listing, previewImage });
};

// Update Edited Listing data in DB.
module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    // Checking if file exist or not.
    if (req.file) {
        const { path: url, filename } = req.file;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

// Delete Lising.
module.exports.deleteListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect(`/listings`);
};
