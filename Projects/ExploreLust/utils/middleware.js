const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl; // Storing original URL in the session cookies to redirect back to it later.
        req.flash("error", "Signup or login to create a new post!");
        return res.redirect("/login");
    }
    next();
};

// Middleware to store the original URL in the 'res.locals' object.
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) res.locals.redirectUrl = req.session.redirectUrl;
    next();
};

// Middleware to check current User is owner of current Listing or not.
module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not authorized to make changes.");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

// Middleware to check current User is owner of current Review or not.
module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);

    if (!review.author.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not authorized to make changes.");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

// Schema Validator Middleware
module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body); // Validating data inside req.body using joi's schema.
    if (error) {
        throw new ExpressError(400, error.message); // If there is error, then throw it.
    } else {
        next(); // If there is no error, call next middleware.
    }
};

// Schema Validator Middleware
module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error.message);
    } else {
        next();
    }
};
