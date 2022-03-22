import React from "react";
import "./SingleProducts.css";

const SingleProduct = (props) => {
  const { name, img, price, ratings, seller } = props.products;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">Price: ${price}</p>
        <div className="other-info">
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings} Star</p>
        </div>
      </div>
      <button onClick={props.handleAddToCart} type="submit">
        Add To Cart <i className="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  );
};

export default SingleProduct;
