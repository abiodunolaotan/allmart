"use client"

import { useState } from 'react';
import { footer, iconList } from '@/constants/mockData';
import Link from 'next/link';
import { useAuth } from "@/context/AuthContext";
import Button from './Button';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { usePathname } from 'next/navigation';
import CartSidebar from './CartSidebar'; // 1. Imported CartSidebar

const Navbar = () => {

  const [isCartOpen, setIsCartOpen] = useState(false); // 2. State to toggle sidebar
  const { icon } = iconList[1];
  const { logout, isAuthenticated, user } = useAuth();
  const { Brand} = footer[0];
  const navLinks = [
      { 
        name: "Discover", 
        href: "/",
      },
      { 
        name: "Wishlist", 
        href: "/wishlist" 
      },
      { 
        name: "My orders", 
        href: "/orderhistory" 
      }
  ];
  const { totalItems } = useCart();
  const pathname = usePathname();
  const isAuthPage = pathname === '/signin' || pathname === '/signup';

  return (
    <>
      <header className=" py-4 sticky inset-0 z-50 bg-white">
        <div className='flex justify-between items-center mx-auto max-w-7xl'>
          <div>
            <div className="flex items-center gap-2">
              <div className=" flex justify-center items-center w-8 h-9 rounded-[10] bg-[#13244A]">
                <Link href="/"><i className={`${icon}  text-[20px] text-white`}></i></Link>
              </div>
              <h3 className="text-[#13244A] text-[27px] font-bold"><Link href="/">{Brand}</Link></h3>
            </div>
          </div>
          <div className="flex gap-6 text-[#13244A] font-semibold text-[18px]">
            {
              navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={link.className}
                >
                  {link.name}
                </Link>
              ))
            }
          </div>
          <div>
            <nav>
                {isAuthenticated === true ? (
                    <div className="flex items-center gap-4 relative">
                      <span className="text-gray-700 text-sm font-medium">
                        Hello, {user?.name}
                      </span>
                      <Button
                        label="Sign Out"
                        onClick={logout}
                        className="bg-[#13244A] hover:bg-[#2c65c7] text-white py-3 px-8 "
                      />

                      {!isAuthPage && (
                        /* 3. Added onClick handler and cursor pointer */
                        <div 
                          className="relative cursor-pointer" 
                          onClick={() => setIsCartOpen(true)}
                        >
                          <i className="fa-solid fa-cart-shopping text-[#13244A] text-[24px]"></i>
                          {totalItems > 0 && (
                            <div className="bg-[#D94C50] flex justify-center items-center w-5 h-5 rounded-full text-white text-xs absolute -top-2 -right-2">
                              {totalItems}
                            </div>
                          )}
                        </div>
                      )}

                    </div>

                ) : (
                    <div className='flex gap-3 items-center'>
                      <Link
                        href="/signin"
                        className="border-[#13244A] border-2 hover:bg-blue-300 text-[#13244A] py-2 px-3 rounded-lg mr-2"
                      >
                          Sign In
                      </Link>
                      <Link
                        href="/signup"
                        className="bg-[#13244A] hover:bg-blue-300 hover:text-black text-white py-3 px-4 rounded-lg"
                      >
                        Sign Up
                      </Link>

                      {!isAuthPage && (
                        /* 3. Added onClick handler and cursor pointer */
                        <div 
                          className="relative cursor-pointer" 
                          onClick={() => setIsCartOpen(true)}
                        >
                          <i className="fa-solid fa-cart-shopping text-[#13244A] text-[24px]"></i>
                          {totalItems > 0 && (
                            <div className="bg-[#D94C50] flex justify-center items-center w-5 h-5 rounded-full text-white text-xs absolute -top-2 -right-2">
                              {totalItems}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                )}
            </nav>
          </div>
        </div>
      </header>

      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  )
}

export default Navbar;