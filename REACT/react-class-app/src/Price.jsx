export default function Price({ oldPrice, newPrice }) {
  let styles = {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "#d6bc60",
    borderRadius: "0 0 0.9rem .9rem",
  };
  let oldStyles = {
    textDecorationLine: "line-through",
  };
  let newStyles = {
    fontWeight: "bold",
  };
  return (
    <div style={styles}>
      <span style={oldStyles}>{oldPrice}</span>
      <span style={newStyles}>{newPrice}</span>
    </div>
  );
}
