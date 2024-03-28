import "../../App.css";
import "./styles.css";

import { useParams } from "react-router";
import { type Product } from "../../types/types";
import { getItemById, handleCartUpdate } from "../utils/utils";
import Button from "../ui/Button";
import { useCartContext } from "../../providers/CartProvider";

const ItemPage = () => {
  const { cartItems, setCartItems } = useCartContext();
  const { id } = useParams();

  const product: Product | undefined = getItemById(id);

  if (!product || !id) {
    return (
      <div className="container page-container">
        "We couldn't find the product, please try again";
      </div>
    );
  }

  return (
    <div className="container ">
      <div className="page-container">
        <div className="item-container">
          <div>
            <img src={product.src} alt="Product" />
          </div>
          <div>
            <h3>{product.title}</h3>
            <p>{product.newPrice} &#x20bd;</p>
            <p>{product.description}</p>
            <Button
              className={"product-btn"}
              type={"button"}
              onClick={() =>
                handleCartUpdate({ product, cartItems, setCartItems })
              }
            >
              {"Купить"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
