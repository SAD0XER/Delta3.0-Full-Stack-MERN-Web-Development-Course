import "./Product.css";

function Product({ title, price = 1 }) {
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{price}</p>
      {price > 30000 ? <p>30% Discount</p> : <a href="/">Get Discount</a>}
      {/* {price > 30000 && <p>30% Discount</p>} */}
    </div>
  );
}

export default Product;
