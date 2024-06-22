import "./Product.css";

function Product({ title, price = 1, featureArr, featureObj }) {
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{price}</p>
      <p>
        {featureArr.map((featureArr) => (
          <li>{featureArr}</li>
        ))}
      </p>
      <p>{featureObj.a}</p>
    </div>
  );
}

export default Product;
