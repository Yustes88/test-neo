import { type CartItem } from "../types/types";
import { useCartContext } from "../providers/CartProvider";

const useCart = () => {
  const { cartItems, setCartItems } = useCartContext();

  const incrementProductCount = (product: CartItem) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === product.id) {
        return { ...cartItem, total: cartItem.total + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const decrementProductCount = (product: CartItem) => {
    let updatedCartItems = cartItems
      .map((cartItem) => {
        if (cartItem.id === product.id) {
          const newTotal = cartItem.total - 1;
          return { ...cartItem, total: newTotal };
        }
        return cartItem;
      })
      .filter((item) => item.total !== 0);
    setCartItems(updatedCartItems);
  };

  const deleteCartProduct = (product: CartItem) => {
    let updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== product.id
    );
    setCartItems(updatedCartItems);
  };

  return {
    incrementProductCount,
    decrementProductCount,
    deleteCartProduct,
  };
};

export default useCart;
