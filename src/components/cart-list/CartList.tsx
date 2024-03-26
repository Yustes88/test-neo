import "../../App.css";
import "./styles.css";
import { useCartContext } from "../../providers/CartProvider";
import CartProdcut from "../cart-product/CartProduct";

const CartList = () => {
  const { cartItems } = useCartContext();

  if (!cartItems || cartItems.length === 0) {
    return <div>Cart is empty</div>;
  }

  return (
    <div className="container">
      <div className="cart-list">
        {cartItems.map((cartItem) => (
          <CartProdcut item={cartItem} key={cartItem.id} />
        ))}
      </div>
    </div>
  );
};

export default CartList;
