"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import DeliveryDetailsForm from '@/components/DeliveryDetailsForm'
import PaymentMethod from '@/components/PaymentMethod'
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";


export default function CheckoutPage() {
  const { cartItems, isLoading } = useCart();
  const router = useRouter();

  useEffect(() => {
    console.log("Current cart items:", cartItems);
    console.log("Is loading:", isLoading);
    if (!isLoading && cartItems.length === 0) {
        console.log("Cart is empty! Redirecting to home...");
      router.push("/");
    }
  }, [cartItems, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-[#13244A] font-medium">Loading your checkout...</p>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return null;
  }
  return (
    <div className="mx-auto max-w-7xl"> 

        <div className="flex gap-3 items-center mb-4">
            <Link href="/" className="text-[#6B778E]">Discover</Link>
            <i className="fa-solid fa-greater-than"></i>
            <Link href="/" className="text-[#6B778E]">Your cart</Link>
            <i className="fa-solid fa-greater-than"></i>
            <p className="font-medium">Checkout</p>
        </div>

        <div className="flex justify-between items-center">
            <div className="mb-6">
                <h3 className="text-4xl font-bold mb-3">Checkout</h3>
                <p className="text-[#6B778E]">Review your 4 items from 2 stores and complete your order.</p>
            </div>

            <Link href="/">
                 <i className="fa-solid fa-arrow-left-long"></i> Back to cart
            </Link>
        </div>

        <form action="/orderhistory">
            <div className="grid grid-cols-[2fr_1fr] gap-5 my-7">
            
              <div className="flex flex-col gap-5">
                <DeliveryDetailsForm/>
                <PaymentMethod/>
              </div>

              <div>
                <OrderSummary/>
              </div>

            </div>
      </form>
      
    </div>
  )
}


