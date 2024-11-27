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

/* Mongoose Middlewares to Handle Deletions */

// This 'pre' middleware runs before query executed.
// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("PRE_MIDDLEWARE");
// });

// This 'post' middleware runs after query executed.
customerSchema.post("findOneAndDelete", async (customer) => {
    if (customer.orders.length) {
        let result = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log(result, "\nThis data is deleted by POST_MIDDLEWARE!");
    }
});

// Creating Models.
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// Function to create customer data.
const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders"); // Used to extract entire document instead of only document id.
    console.log(result[0]);
};

// findCustomer();

const addCustomer = async () => {
    let newCustomer = new Customer({
        // Creating new customer.
        name: "Price",
    });

    let newOrder = new Order({
        // Creating new order.
        item: "Sandwich",
        price: 200,
    });

    newCustomer.orders.push(newOrder); // Assigning new order ID into customers order section.

    // Saving order and customer instances into DB.
    await newOrder.save();
    await newCustomer.save();

    console.log("Added new customer successfully!.");
};

// addCustomer();

const delCustomer = async () => {
    let data = await Customer.findByIdAndDelete("67473fe6d0a76cd515bd6984");
    console.log(data, "\nData above is deleted!");
};

delCustomer();
