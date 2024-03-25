import { LuHeart } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { type Product } from "../types/types";

export const icons = [
  {
    id: uuidv4(),
    src: "/",
    icon: <MdOutlineShoppingCart color="#838383" size={22} />,
    total: 0,
  },
  {
    id: uuidv4(),
    src: "/",
    icon: <LuHeart color="#838383" size={22} />,
    total: 0,
  },
];

export const headphones: Product[] = [
  {
    id: uuidv4(),
    title: "Apple BYZ S852I",
    newPrice: 2927,
    oldPrice: 3629,
    rate: 4.7,
    src: "/products/product-1.png",
  },
  {
    id: uuidv4(),
    title: "Apple EarPods",
    newPrice: 2327,
    rate: 4.5,
    src: "/products/product-2.png",
  },
  {
    id: uuidv4(),
    title: "Apple EarPods",
    newPrice: 2327,
    rate: 4.5,
    src: "/products/product-3.png",
  },
  {
    id: uuidv4(),
    title: "Apple EarPods",
    newPrice: 2327,
    rate: 4.5,
    src: "/products/product-1.png",
  },
  {
    id: uuidv4(),
    title: "Apple BYZ S852I",
    newPrice: 2927,
    oldPrice: 3629,
    rate: 4.7,
    src: "/products/product-2.png",
  },
  {
    id: uuidv4(),
    title: "Apple EarPods",
    newPrice: 2327,
    rate: 4.5,
    src: "/products/product-3.png",
  },
];
