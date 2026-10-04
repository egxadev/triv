import React, { createContext, useContext, useState } from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

export const cartState = atom({
  key: 'cartState',
  default: [
    {
      id: 'hoodie-01',
      name: 'Triv Exclusive Bearish/Bullish Hoodie',
      price: 350000,
      quantity: 1,
      image: '/assets/merchandise/hoodie-merch.jpg'
    }
  ],
});

export const cartCountSelector = selector({
  key: 'cartCountSelector',
  get: ({ get }) => {
    const items = get(cartState);
    return items.reduce((sum, item) => sum + (item.quantity || 0), 0);
  },
});

export const cartTotalSelector = selector({
  key: 'cartTotalSelector',
  get: ({ get }) => {
    const items = get(cartState);
    return items.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 0), 0);
  },
});

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useRecoilState(cartState);
  const totalItems = useRecoilValue(cartCountSelector);
  const totalPrice = useRecoilValue(cartTotalSelector);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const dispatch = (action) => {
    switch (action.type) {
      case 'ADD_ITEM': {
        const product = action.payload;
        setCart((prevCart) => {
          const existingIndex = prevCart.findIndex((item) => String(item.id) === String(product.id));
          if (existingIndex > -1) {
            return prevCart.map((item, index) =>
              index === existingIndex
                ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                : item
            );
          }
          return [
            ...prevCart,
            {
              id: String(product.id),
              name: product.name,
              price: Number(product.price),
              quantity: product.quantity || 1,
              image: product.image || '/assets/logo.png'
            }
          ];
        });
        break;
      }

      case 'REMOVE_ITEM': {
        const idToRemove = action.payload?.id ?? action.payload;
        setCart((prevCart) => prevCart.filter((item) => String(item.id) !== String(idToRemove)));
        break;
      }

      case 'UPDATE_QUANTITY': {
        const { id, quantity } = action.payload;
        if (quantity <= 0) {
          setCart((prevCart) => prevCart.filter((item) => String(item.id) !== String(id)));
        } else {
          setCart((prevCart) =>
            prevCart.map((item) =>
              String(item.id) === String(id) ? { ...item, quantity } : item
            )
          );
        }
        break;
      }

      case 'CLEAR_CART': {
        setCart([]);
        break;
      }

      default:
        console.warn(`Unhandled action type: ${action.type}`);
    }
  };

  const addItem = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    setIsCartOpen(true);
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const value = {
    cart,
    totalItems,
    totalPrice,
    dispatch,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    openCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
