import React from "react";
import { Link } from "react-router-dom";

const CartListEmpty = () => {
  return (
    <div className="empty-cart">
      <h2>Your cart is empty.</h2>
      <p className="empty-cart-description">
        Start shopping{" "}
        <span>
          <Link to="/"> here</Link>
        </span>
        !
      </p>
    </div>
  );
};

export default CartListEmpty;
