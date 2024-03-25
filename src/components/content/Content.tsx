import "./styles.css";
import ProductsList from "../products-list/ProductsList";
import { headphones, wirelessHeadphones } from "../../data/data";
import { type FC } from "react";

const Content: FC = () => {
  return (
    <div className="content">
      <ProductsList title={"Наушники"} products={headphones} />
      <ProductsList
        title={"Беспроводные наушники"}
        products={wirelessHeadphones}
      />
    </div>
  );
};

export default Content;
