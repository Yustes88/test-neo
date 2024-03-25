import "./styles.css";
import "../../App.css";
import ProductItem from "../product-item/ProductItem";
import { type Product } from "../../types/types";
import { type FC } from "react";

type ProductsListProps = {
  title: string;
  products: Product[];
};

const ProductsList: FC<ProductsListProps> = ({ title, products }) => {
  return (
    <div className="container">
      <div>
        <h1 className="list-title">{title}</h1>
        <div className="list-grid">
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
