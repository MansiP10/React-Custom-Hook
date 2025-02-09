import React from "react";
import { useFetch } from ".././useFetch";
import "./ProductList.css";

function ProductList() {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");
 
  const cleanImageUrl = (url) => {
    if (!url) return "";
    return url.replace(/\[|\]|&quot;|"/g, "").trim() || "";
  };

  return (
    <div className="app-container">
      {data && data.length > 0 && <h1 className="title">Product List</h1>}
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      <div className="products">
        {data &&
          data.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={cleanImageUrl(product.images[0])} alt={product.title} className="product-image" />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">${product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductList;