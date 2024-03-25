import "./styles.css";
import ProductsList from "../products-list/ProductsList";
import { headphones } from "../../data/data";
import { type FC } from "react";

const Content: FC = () => {
  return (
    <div className="content">
      <ProductsList title={"Наушники"} products={headphones} />
    </div>
  );
};

export default Content;
