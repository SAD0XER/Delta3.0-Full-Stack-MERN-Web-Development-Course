// Checking wheather User logged in or not.
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash("error", "Signup or login to create a new post!");
        return res.redirect("/signup");
    }
    next();
};
