const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../utils/middleware.js");
const userController = require("../controllers/user.js");

// Signup User Route.
router.route("/signup")
    .get(userController.signupUserForm)
    .post(wrapAsync(userController.saveSignupUser));

// Login User Route.
router.route("/login")
    .get(userController.loginUserForm)
    .post(
        saveRedirectUrl,
        passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
        userController.saveLoginUser,
    );

// Logout User Route.
router.get("/logout", userController.logoutUser);

module.exports = router;
