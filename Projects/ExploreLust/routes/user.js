const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../utils/middleware.js");
const userController = require("../controllers/user.js");

// Signup User Route.
router.get("/signup", userController.signupUserForm);

router.post("/signup", wrapAsync(userController.saveSignupUser));

// Login User Route.
router.get("/login", userController.loginUserForm);

router.post(
    "/login",
    saveRedirectUrl,
    passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
    userController.saveLoginUser,
);

// Logout User Route.
router.get("/logout", userController.logoutUser);

module.exports = router;
