import { LuHeart } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { type FooterLink, type Product } from "../types/types";

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

export const footerLinks: FooterLink[] = [
  {
    id: uuidv4(),
    title: "Избранное",
    url: "/",
  },
  {
    id: uuidv4(),
    title: "Корзина",
    url: "/",
  },
  {
    id: uuidv4(),
    title: "Контакты",
    url: "/",
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

export const wirelessHeadphones: Product[] = [
  {
    id: uuidv4(),
    title: "Apple AirPodsI",
    newPrice: 9257,
    rate: 4.7,
    src: "/products/wireless-1.png",
  },
  {
    id: uuidv4(),
    title: "GERLAX GH-04",
    newPrice: 6527,
    rate: 4.5,
    src: "/products/wireless-2.png",
  },
  {
    id: uuidv4(),
    title: "BOROFONE BO4",
    newPrice: 7527,
    rate: 4.5,
    src: "/products/wireless-3.png",
  },
];

export const languages = [
  {
    id: uuidv4(),
    title: "Ru",
    url: "/",
  },
  {
    id: uuidv4(),
    title: "Eng",
    url: "/",
  },
];
