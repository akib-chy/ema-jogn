import React, { useEffect, useState } from "react";
import SingleProduct from "../Single-Product/SingleProduct";
import "./Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
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
        <h3>order summary</h3>
        <h4>cart: {cart.length}</h4>
      </div>
    </div>
  );
};

export default Products;
