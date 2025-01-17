const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");

// Signup User Route.
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router.post(
    "/signup",
    wrapAsync(async (req, res) => {
        try {
            let { username, email, password } = req.body;
            const newUser = new User({ email, username });
            const registeredUser = await User.register(newUser, password);
            console.log(registeredUser);

            // Login User after successful User registration.
            req.login(registeredUser, (error) => {
                if (error) return next(error);
                req.flash("success", "Welcome to ExploreLust!");
                res.redirect("/listings");
            });
        } catch (error) {
            req.flash("error", error.message);
            res.redirect("/signup");
        }
    }),
);

// Login User Route.
router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
    async (req, res) => {
        req.flash("success", "Welcome back to ExploreLust!");
        res.redirect("/listings");
    },
);

// Logout User Route.
router.get("/logout", (req, res, next) => {
    req.logout((error) => {
        if (error) return next(error);
        req.flash("success", "You have successfully logged out.");
        res.redirect("/listings");
    });
});

module.exports = router;
