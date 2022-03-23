import React, { useEffect, useState } from "react";
import { addToDb, getShopingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
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
  useEffect(() => {
    const storedCart = getShopingCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addProduct = products.find((product) => product.id === id);
      if (addProduct) {
        const quantity = storedCart[id];
        addProduct.quantity = quantity;
        saveCart.push(addProduct);
      }
    }
    setCart(saveCart);
  }, [products]);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Products;
