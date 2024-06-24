import Product from "./Product.jsx";

export default function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil (2nd Gen)" idx={1} />
      <Product title="Zebronics Zeb-Transformer" idx={2} />
      <Product title="Potronics Toad 12" idx={3} />
    </div>
  );
}
