import "./App.css";
import Product from "./Product.jsx";

function App() {
  return (
    <>
      <Product
        title="Laptop"
        price={3000}
        featureArr={["water proof", "dust proof"]}
        featureObj={{ a: "High tech", b: "durable" }}
      />
    </>
  );
}

export default App;
