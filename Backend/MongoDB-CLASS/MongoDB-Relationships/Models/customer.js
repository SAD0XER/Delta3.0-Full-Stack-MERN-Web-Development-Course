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

// Defining Schemas
const orderSchema = new Schema({ item: String, price: Number });

const customerSchema = new Schema({
    name: String,
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

// Creating Models.
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// Function to create customer data.
const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders"); // Used to extract entire document instead of only document id.
    console.log(result[0]);
};

findCustomer();
