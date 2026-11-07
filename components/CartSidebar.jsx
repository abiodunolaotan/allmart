

"use client";

import { useState, useMemo } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { vendors } from '@/constants/mockData'
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import CartItem from "./CartItem";

const CartSidebar = ({ isOpen, onClose }) => {
    const {products} = vendors
  const router = useRouter();
  
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    clearCart 
  } = useCart();



  const [discount, setDiscount] = useState(0);
  const { isAuthenticated } = useAuth();


  const totalItems = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.qty, 0);
  }, [cartItems]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  }, [cartItems]);

  const total = useMemo(() => {
    return Math.max(0, subtotal - discount);
  }, [subtotal, discount]);


  const handleQuantityIncrease = (productId) => {
    const item = cartItems.find((i) => i.id === productId);
    if (item) {
      updateQuantity(productId, item.qty + 1);
    }
  };

  const handleQuantityDecrease = (productId) => {
    const item = cartItems.find((i) => i.id === productId);
    if (item && item.qty > 1) {
      updateQuantity(productId, item.qty - 1);
    } else if (item && item.quantity === 1) {

      removeFromCart(productId);
    }
  };

  


  const handleProceedToCheckout = () => {
  onClose(); 

  if (isAuthenticated) {
    router.push("/checkout"); 
  } else {
    router.push("/signup");   
  }
};
 
  if (!isOpen) return null;

  return (
   
    <div className="fixed inset-0 z-50">
    
        <div 
        className="fixed inset-0 bg-black/50" 
        onClick={onClose} 
        />

        <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-10 transition-transform duration-[300ms] ease-in-out">
        
       <div>
            <div className="p-5">

                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-3xl font-medium">Your cart</h3>
                    <i className="fa-solid fa-x text-2xl"></i>
                </div>

                <hr className="text-[#bfc8d6]"/>

            <CartItem/>

            </div>

            <div className="px-5">
                <hr className="text-[#DFE5EE] mb-2" />

                <div className="flex justify-between items-center mb-2">
                    <p>Subtotal</p>
                    <p>₦670,000</p>
                </div>

                <div className="flex justify-between items-center mb-2">
                    <p>Shipping fee</p>
                    <p>₦2,500</p>
                </div>

                <p className="text-sm mb-2">Illustrative flat fee for this example.</p>

                <div className="p-4 flex justify-between items-center bg-[#E7F0FF] rounded-lg mb-2">
                    <p>Total</p>
                    <h3>₦672,500</h3>
                </div>

                <Link href="/checkout" className="flex justify-center px-6 py-3 bg-[#13244A] text-white rounded-lg">Proceed to checkout</Link>
            </div>
            
       </div>

        </div>
  </div>
  )
};

export default CartSidebar;