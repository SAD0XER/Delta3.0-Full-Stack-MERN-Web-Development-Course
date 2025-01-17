// Middleware to check wheather User logged in or not.
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
