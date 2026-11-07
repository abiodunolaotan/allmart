"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("allmart_cart");
      if (savedCart) {
        try {
          setCartItems(JSON.parse(savedCart));
        } catch (error) {
          console.error("Failed to parse cart items from localStorage:", error);
        }
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading && typeof window !== "undefined") {
      localStorage.setItem("allmart_cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isLoading]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          qty: updatedItems[existingItemIndex].qty + 1,
        };
        return updatedItems;
      } else {
        return [...prevItems, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, action) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === productId) {
          if (action === "increase") {
            return { ...item, qty: item.qty + 1 };
          }
          if (action === "decrease") {
            if (item.qty > 1) {
              return { ...item, qty: item.qty - 1 };
            }
          }
        }
        return item;
      });

      return updatedItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  let totalItems = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalItems += cartItems[i].qty;
  }

  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].price * cartItems[i].qty;
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};