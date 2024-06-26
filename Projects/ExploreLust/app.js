const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

const MONGO_URL = "mongodb://127.0.0.1:27017/ExploreLust";

/* Server setup */
app.listen(8080, () => {
  console.log("Server is running on localhost: 8080");
});

/* Database connectivity setup */
main()
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

/* All Routes */
// home route
app.get("/", (req, res) => {
  res.send("Home route of project ExploreLust is working.");
});

// Index Route: /listings - To see all titles.
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({}); //To extract all listing data from database.
  res.render("./listings/index.ejs", { listings: allListings }); //Passing all listings to index.ejs with key name as `listings`.
});

// Show Route: /listings/:id - To see a single list.
app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("./listings/show.ejs", { listing });
});
