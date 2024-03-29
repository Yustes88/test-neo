import "../../App.css";
import "./styles.css";
import { useCartContext } from "../../providers/CartProvider";
import CartProdcut from "../cart-product/CartProduct";
import TotalPriceCart from "../totalPriceCart/TotalPriceCart";
import CartListEmpty from "./CartListEmpty";

const CartList = () => {
  const { cartItems } = useCartContext();

  if (!cartItems || cartItems.length === 0) {
    return <CartListEmpty />;
  }

  return (
    <div className="container">
      <div className="cart-container">
        <div className="cart-list">
          {cartItems.map((cartItem) => (
            <CartProdcut item={cartItem} key={cartItem.id} />
          ))}
        </div>
        <TotalPriceCart />
      </div>
    </div>
  );
};

export default CartList;
