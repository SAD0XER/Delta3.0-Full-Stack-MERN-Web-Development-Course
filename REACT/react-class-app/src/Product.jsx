import "./Product.css";

function Product({ title, price = 1 }) {
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}

export default Product;
