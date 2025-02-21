const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

/* It will add a username, hash and salt field to store the username, the hashed password and the salt value. */
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
