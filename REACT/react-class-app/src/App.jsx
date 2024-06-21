import "./App.css";
import Product from "./Product.jsx";

function App() {
  return (
    <>
      <Product title="Phone" price={150000} />
      <Product title="Laptop" price={200000} />
      <Product title="Headphone" />
    </>
  );
}

export default App;
