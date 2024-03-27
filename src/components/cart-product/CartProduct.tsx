import React, { type FC } from "react";
import { type CartItem } from "../../types/types";
import "./styles.css";
import { IoTrashBinOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import useCart from "../../hooks/useCart";

type CartItemProps = {
  item: CartItem;
};

const CartProdcut: FC<CartItemProps> = ({ item }) => {
  const { incrementProductCount, decrementProductCount, deleteCartProduct } =
    useCart();

  const handleIncrement = (product: CartItem) => {
    incrementProductCount(product);
  };

  const handleDecrement = (product: CartItem) => {
    decrementProductCount(product);
  };

  const handleDelete = (product: CartItem) => {
    deleteCartProduct(product);
  };

  return (
    <div className="cart-product-grid">
      <div className="cart-image-container">
        <img className="cart-image" src={item.src} alt="Alt text" />
      </div>
      <div className="cart-title-price">
        <h3 className="cart-title">{item.title}</h3>
        <span className="cart-price">{item.newPrice} &#x20bd;</span>
      </div>
      <button className="cart-btn" onClick={() => handleDelete(item)}>
        <IoTrashBinOutline fill="#DF6464" color="#DF6464" size={"20px"} />
      </button>
      <div className="cart-total-btns">
        <button
          className="cart-total-btn"
          onClick={() => handleIncrement(item)}
        >
          <IoIosAddCircleOutline size={"35px"} color="#FFCE7F" />
        </button>
        <span>{item.total}</span>
        <button
          className="cart-total-btn"
          onClick={() => handleDecrement(item)}
        >
          <GrSubtractCircle size={"30px"} color="#FFCE7F" />
        </button>
      </div>
      <div className="cart-final-price cart-title-price ">
        <span>{item.newPrice} &#x20bd;</span>
      </div>
    </div>
  );
};

export default CartProdcut;
