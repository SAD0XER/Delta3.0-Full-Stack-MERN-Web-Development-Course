import { useState, useEffect } from "react";

export default function Temp() {
  let [data, setData] = useState({});
  let randomProduct = Math.floor(Math.random() * 20) + 1;

  let getProduct = async () => {
    let response = await fetch(`https://fakestoreapi.com/products/${randomProduct}`);
    let jsonResponse = await response.json();
    setData(jsonResponse);
  };

  useEffect(() => {
    async function getFirstProduct() {
      let response = await fetch(`https://fakestoreapi.com/products/${randomProduct}`);
      let jsonResponse = await response.json();
      setData(jsonResponse);
    }

    getFirstProduct();
  }, []);

  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={getProduct}>Get Product</button>
      <hr />
      <p>Category: {data.category}</p>
      <p>Title: {data.title}</p>
      <img src={data.image} alt={data.title} style={{ height: "5rem" }} />
      <p>Price: {data.price}</p>
    </div>
  );
}
