import React, { type FC } from "react";
import { type CartItem } from "../../types/types";
import "./styles.css";
import { IoTrashBinOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { useCartContext } from "../../providers/CartProvider";

type CartItemProps = {
  item: CartItem;
};

const CartProdcut: FC<CartItemProps> = ({ item }) => {
  const { cartItems, setCartItems } = useCartContext();

  const incrementProductCount = (product: CartItem) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === product.id) {
        return { ...cartItem, total: cartItem.total + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const decrementProductCount = (product: CartItem) => {
    let updatedCartItems = cartItems
      .map((cartItem) => {
        if (cartItem.id === product.id) {
          const newTotal = cartItem.total - 1;
          return { ...cartItem, total: newTotal };
        }
        return cartItem;
      })
      .filter((item) => item.total !== 0); // Filter out items with total count of 0
    setCartItems(updatedCartItems);
  };

  const deleteCartProduct = (product: CartItem) => {
    let updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== product.id
    );
    setCartItems(updatedCartItems);
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
      <button className="cart-btn" onClick={() => deleteCartProduct(item)}>
        <IoTrashBinOutline fill="#DF6464" color="#DF6464" size={"20px"} />
      </button>
      <div className="cart-total-btns">
        <button
          className="cart-total-btn"
          onClick={() => incrementProductCount(item)}
        >
          <IoIosAddCircleOutline size={"35px"} color="#FFCE7F" />
        </button>
        <span>{item.total}</span>
        <button
          className="cart-total-btn"
          onClick={() => decrementProductCount(item)}
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
