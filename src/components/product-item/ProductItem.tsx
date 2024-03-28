import { type FC } from "react";
import { type Product } from "../../types/types";
import "./styles.css";
import "../../App.css";

import { FaStar } from "react-icons/fa6";
import { useCartContext } from "../../providers/CartProvider";
import { useNavigate } from "react-router";
import Button from "../ui/Button";
import { handleCartUpdate } from "../utils/utils";

type ProductItemProps = {
  product: Product;
};

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const router = useNavigate();
  const { cartItems, setCartItems } = useCartContext();

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img className="product-image" src={product.src} alt="Alt text" />
      </div>
      <div>
        <div className="product-name-price">
          <h2 className="product-name">{product.title}</h2>
          <div className="product-price">
            <span>{product.newPrice} &#x20bd;</span>
            {product.oldPrice && (
              <s className="old-price">{product.oldPrice} &#x20bd;</s>
            )}
          </div>
        </div>
        <div className="product-rate-btn">
          <div className="product-rate">
            <FaStar color={"#FFCE7F"} size={23} fill={"#FFCE7F"} />
            <span>{product.rate}</span>
          </div>
          <Button
            className={"product-btn"}
            type={"button"}
            disabled={false}
            onClick={() =>
              handleCartUpdate({ product, cartItems, setCartItems })
            }
          >
            {"Купить"}
          </Button>
        </div>
      </div>
      <Button
        className={"btn"}
        type={"button"}
        disabled={false}
        onClick={() => {
          router(`/product/${product.id}`);
        }}
      >
        Посмотреть
      </Button>
    </div>
  );
};

export default ProductItem;
