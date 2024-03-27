import { useCartContext } from "../../providers/CartProvider";
import "./styles.css";

const TotalPriceCart = () => {
  const { cartItems } = useCartContext();

  const totalPrice = cartItems.reduce((item1, item2) => {
    return item1 + item2.newPrice * item2.total;
  }, 0);

  return (
    <div className="total-container">
      <div className="title-price">
        <h4>Итого</h4>
        <span>&#x20bd; {totalPrice}</span>
      </div>
      <div>
        <button className="total-btn">Перейти к оформлению</button>
      </div>
    </div>
  );
};

export default TotalPriceCart;
