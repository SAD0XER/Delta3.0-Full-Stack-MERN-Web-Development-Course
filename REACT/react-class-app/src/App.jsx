import "./App.css";
import Product from "./Product.jsx";
import MsgUser from "./MsgUser.jsx";

function App() {
  return (
    <>
      <MsgUser userName="Sarvesh" textColor="yellow" />
      <Product title="Phone" price={30000} />
      <Product title="Laptop" price={50000} />
      <Product title="Head Phone" price={10000} />
    </>
  );
}

export default App;
