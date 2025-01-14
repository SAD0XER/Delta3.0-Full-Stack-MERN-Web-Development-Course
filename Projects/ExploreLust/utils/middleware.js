// Checking wheather User logged in or not.
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash("error", "You must have account to create post!");
        return res.redirect("/login");
    }
    next();
};
