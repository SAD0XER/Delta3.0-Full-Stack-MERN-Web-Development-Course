const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../utils/middleware.js");
const reviewController = require("../controllers/review.js");

// Add Review Route: /listings/:id/reviews - To add review in respective listing.
router.post("/", validateReview, isLoggedIn, wrapAsync(reviewController.addReview));

// Delete Review Route: /listings/:id/reviews/:reviewsId
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview));

module.exports = router;
