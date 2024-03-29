import { headphones, wirelessHeadphones } from "../../data/data";
import { type CartItem, type Product } from "../../types/types";

export const getItemById = (itemId: string | undefined) => {
  if (itemId) {
    return [...headphones, ...wirelessHeadphones].find(
      (item) => item.id === itemId
    );
  }
  return;
};

type HandleCartUpdateProps = {
  product: Product;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export const handleCartUpdate = ({
  product,
  cartItems,
  setCartItems,
}: HandleCartUpdateProps) => {
  const existingProductIndex = cartItems.findIndex(
    (item) => item.id === product.id
  );

  if (existingProductIndex !== -1) {
    const updatedCartItems = cartItems.map((item, index) =>
      index === existingProductIndex ? { ...item, total: item.total + 1 } : item
    );
    setCartItems(updatedCartItems);
  } else {
    setCartItems([...cartItems, { ...product, total: 1 }]);
  }
};
