const User = require("../models/user.js");

// Signup User GET Route Callback.
module.exports.signupUserForm = (req, res) => {
    res.render("users/signup.ejs");
};

// Signup User POST Route Callback.
module.exports.saveSignupUser = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);

        // Login User after successful User registration.
        req.login(registeredUser, (error) => {
            if (error) return next(error);
            req.flash("success", "Welcome to Explore Hut!");
            res.redirect("/listings");
        });
    } catch (error) {
        req.flash("error", error.message);
        res.redirect("/signup");
    }
};

// Login User GET Route Callback.
module.exports.loginUserForm = (req, res) => {
    res.render("users/login.ejs");
};

// Login User POST Route Callback.
module.exports.saveLoginUser = async (req, res) => {
    req.flash("success", "Login successful!");
    // let redirectUrl = res.locals.redirectUrl || "/listings"; // Redirecting to '/listings' if 'res.locals.redirectUrl' is not undefined.
    res.redirect(res.locals.redirectUrl || "/listings");
};

// Logout User Route Callback.
module.exports.logoutUser = (req, res, next) => {
    req.logout((error) => {
        if (error) return next(error);
        req.flash("success", "Logout successful.");
        res.redirect("/listings");
    });
};
