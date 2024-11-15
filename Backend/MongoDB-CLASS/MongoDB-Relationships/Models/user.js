const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => {
        console.log("Connection Successful!");
    })
    .catch((err) => console.log(err));

async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/mongo-relation-demo");
}

// Defining user schema.
const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model("user", userSchema); // Implementing schema on DB.

// Adding data into DB.
const addUsers = async () => {
    let user1 = new User({
        username: "ghost",
        addresses: [
            {
                location: "18, Hanuman Mandir, Manchester, United Kingdom",
                city: "Bhandup",
            },
        ],
    });

    user1.addresses.push({ location: "118, Dev House", city: "Lahore" }); // Adding data in to DB by accessing user1.
    let result = await user1.save();
    console.log(result);
};

addUsers();
