import React, { useEffect, useState } from "react";
import SingleProduct from "../Single-Product/SingleProduct";
import "./Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    console.log(product);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <SingleProduct
            products={product}
            key={product.id}
            handleAddToCart={() => handleAddToCart(product)}
          ></SingleProduct>
        ))}
      </div>
      <div className="order-container">
        <h4>order summary</h4>
      </div>
    </div>
  );
};

export default Products;
