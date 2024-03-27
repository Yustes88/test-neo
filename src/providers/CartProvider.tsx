import React, { type FC, createContext, useState, useContext } from "react";

import { type CartItem } from "../types/types";

type CartContextProps = {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContextProvider: FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  console.log(cartItems);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useCartProvider must be used within a ThemeContextProvider"
    );
  }
  return context;
}

export default CartContextProvider;
