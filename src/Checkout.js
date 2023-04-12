import React from "react";
import "./Checkout.css";

function Checkout(){
    return (
      <div className="checkout">
        <div className="checkout_left">
          <img
            src="https://media.istockphoto.com/id/1153201559/photo/star-ranking.jpg?s=612x612&w=0&k=20&c=5LvJcDLHWgzHMybwgrQZqP0T2Xq1JkfRARJ_g-LTCKk="
            alt=""
            className="checkout_ad"
          />
          <div>
            <h2 className="checkout_title">Your Shopping basket
             </h2>
             <CheckoutProduct/>
          </div>
        </div>
        <div className="checkout_right"></div>
      </div>
    );
}

export default Checkout;