import React from "react";
import "./Product.css";

function Product(){
    return (
      <div>
        <div className="product">
          <div className="product_info">
            <p>Title</p>
            <p className="product_price">
              <small>£</small>
              <strong>30</strong>
              </p>
            <div className="product_rating">⭐⭐</div>
          </div>
          <img
            src="https://media.istockphoto.com/id/1014076920/photo/luxury-white-leather-female-bag.jpg?s=612x612&w=0&k=20&c=ARsYnN1fqn2eQVAjT4TprPlTE6OpF3EJCY84oloASbU="
            alt="product_image"
          />
          <button>add to basket</button>
        </div>
      </div>
    );
}

export default Product;