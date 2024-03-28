import { LuHeart } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import {
  type Route,
  type FooterLink,
  type Product,
  type SocialLink,
  type Language,
} from "../types/types";
import ProductsList from "../components/products-list/ProductsList";
import CartList from "../components/cart-list/CartList";
import Parked from "../components/parked/Parked";
import ItemPage from "../components/item-page/ItemPage";

export const footerLinks: FooterLink[] = [
  {
    id: uuidv4(),
    title: "Избранное",
    url: "/favourites",
  },
  {
    id: uuidv4(),
    title: "Корзина",
    url: "/cart",
  },
  {
    id: uuidv4(),
    title: "Контакты",
    url: "/contacts",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: uuidv4(),
    title: "Apple EarPods",
    newPrice: 2327,
    rate: 4.5,
    src: "/products/product-2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: uuidv4(),
    title: "Apple EarPods",
    newPrice: 2327,
    rate: 4.5,
    src: "/products/product-3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: uuidv4(),
    title: "Apple EarPods",
    newPrice: 2327,
    rate: 4.5,
    src: "/products/product-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: uuidv4(),
    title: "Apple BYZ S852I",
    newPrice: 2927,
    oldPrice: 3629,
    rate: 4.7,
    src: "/products/product-2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: uuidv4(),
    title: "Apple EarPods",
    newPrice: 2327,
    rate: 4.5,
    src: "/products/product-3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export const wirelessHeadphones: Product[] = [
  {
    id: uuidv4(),
    title: "Apple AirPodsI",
    newPrice: 9257,
    rate: 4.7,
    src: "/products/wireless-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: uuidv4(),
    title: "GERLAX GH-04",
    newPrice: 6527,
    rate: 4.5,
    src: "/products/wireless-2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: uuidv4(),
    title: "BOROFONE BO4",
    newPrice: 7527,
    rate: 4.5,
    src: "/products/wireless-3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export const icons = [
  {
    id: uuidv4(),
    src: "/cart",
    key: "cart",
    icon: <MdOutlineShoppingCart color="#838383" size={22} />,
    total: 0,
  },
  {
    id: uuidv4(),
    src: "/favourites",
    key: "favourites",
    icon: <LuHeart color="#838383" size={22} />,
    total: 0,
  },
];

export const languages: Language[] = [
  {
    id: uuidv4(),
    title: "Ru",
    url: "/",
  },
  {
    id: uuidv4(),
    title: "Eng",
    url: "/eng",
  },
];

export const routes: Route[] = [
  {
    id: uuidv4(),
    path: "/",
    component: (
      <>
        <ProductsList title={"Наушники"} products={headphones} />
        <ProductsList
          title={"Беспроводные наушники"}
          products={wirelessHeadphones}
        />
      </>
    ),
  },
  {
    id: uuidv4(),
    path: "/cart",
    component: <CartList />,
  },
  {
    id: uuidv4(),
    path: "/eng",
    component: (
      <>
        <ProductsList title={"Headphones"} products={headphones} />
        <ProductsList
          title={"Wireless headphones"}
          products={wirelessHeadphones}
        />
      </>
    ),
  },
  {
    id: uuidv4(),
    path: "/favourites",
    component: <Parked title={"favourites"} />,
  },
  {
    id: uuidv4(),
    path: "/contacts",
    component: <Parked title={"contacts"} />,
  },
  {
    id: uuidv4(),
    path: "/product/:id",
    component: <ItemPage />,
  },
];

export const socialMediaLinks: SocialLink[] = [
  {
    id: uuidv4(),
    url: "https://vk.com",
    icon: "/socials/Vk.svg",
  },
  {
    id: uuidv4(),
    url: "https://telegram.org/",
    icon: "/socials/Telegram.svg",
  },
  {
    id: uuidv4(),
    url: "https://web.whatsapp.com/",
    icon: "/socials/Whatsapp.svg",
  },
];
