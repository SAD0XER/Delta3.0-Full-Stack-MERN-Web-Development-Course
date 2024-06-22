import "./App.css";
import Product from "./Product.jsx";

function App() {
  return (
    <>
      <Product title="Phone" price={30000} />
      <Product title="Laptop" price={50000} />
      <Product title="Head Phone" price={10000} />
    </>
  );
}

export default App;
