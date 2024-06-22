import "./Product.css";

function Product({ title, price = 1 }) {
  let isDiscount = price > 30000;
  let style = { backgroundColor: isDiscount ? "darkblue" : "initial" };
  return (
    <div className="Product" style={style}>
      <h3>{title}</h3>
      <p>{price}</p>
      {isDiscount ? <p>30% Discount</p> : <a href="/">Get Discount</a>}
    </div>
  );
}

export default Product;
