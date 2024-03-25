import { type FC } from "react";
import { type Product } from "../../types/types";
import "./styles.css";
import { CiStar } from "react-icons/ci";

type ProductItemProps = {
  product: Product;
};

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img className="product-image" src={product.src} alt="Alt text" />
      </div>
      <div>
        <div className="product-name-price">
          <h2 className="product-name">{product.title}</h2>
          <span className="product-price">{product.newPrice} &#x20bd;</span>
          {/* <p>Old price</p> */}
        </div>
        <div className="product-rate-btn">
          <div className="product-rate">
            <CiStar color="#FFCE7F" size={23} fill="#FFCE7F" />
            <span>{product.rate}</span>
          </div>
          <button className="product-btn" type="button" onClick={() => {}}>
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;