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
const addCustomer = async () => {
    let customer1 = new Customer({ name: "Simon Riley" }); // Creating new customer.

    // Fetching orders from DB by it's item names.
    let order1 = await Order.findOne({ item: "samosa" });
    let order2 = await Order.findOne({ item: "puranpoli" });

    // Pushing orders in customers data.
    customer1.orders.push(order1);
    customer1.orders.push(order2);

    let result = await customer1.save();
    console.log(result);
};

addCustomer();

// Added orders in the database.
// const addOrders = async () => {
//     let result = await Order.insertMany([
//         { item: "samosa", price: 15 },
//         { item: "puranpoli", price: 50 },
//         { item: "Chocolate", price: 30 },
//     ]);
//     console.log(result);
// };

// addOrders();
