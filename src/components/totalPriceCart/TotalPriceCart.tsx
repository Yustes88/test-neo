import { useCartContext } from "../../providers/CartProvider";
import "./styles.css";
import "../../App.css";
import Button from "../ui/Button";

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
        <Button
          className={"btn"}
          type={"button"}
          onClick={() => {}}
          disabled={true}
        >
          Перейти к оформлению
        </Button>
      </div>
    </div>
  );
};

export default TotalPriceCart;
