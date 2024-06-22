import "./App.css";
import Product from "./Product.jsx";

function App() {
  return (
    <>
      <Product
        title="Laptop"
        price={3000}
        // featureArr={[<li>water proof</li>, <li>dust proof</li>, <li>durable</li>]} //Method 1: Pre-Wrapping for separating array elements for rendering.
        featureArr={["water proof", "dust proof","durable"]} //Method 2: Using Map()
        featureObj={{ a: "High tech", b: "durable" }}
      />
    </>
  );
}

export default App;
