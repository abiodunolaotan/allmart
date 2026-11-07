"use client";

import Button from '@/components/Button'
import TechHavenProductList from '@/components/TechHavenProductList'
import UrbanKicksProductList from '@/components/UrbanKicksProductList'
import Link from 'next/link'
import React, { useState } from 'react'

const WishListPage = () => {
  // If you are fetching or passing wishlist items, calculate total count dynamically.
  // For now, we can calculate based on rendered lists or local state.
  const [techHavenItems] = useState([1, 2]); // Replace with actual item list/context
  const [urbanKicksItems] = useState([1, 2]); // Replace with actual item list/context

  const totalSavedItems = techHavenItems.length + urbanKicksItems.length;

  return (
    <div className='py-8'>
      <div className='mx-auto max-w-7xl text-[#13244A] px-4'>

        <p className='text-[#6B778E] font-medium uppercase tracking-wider text-sm mb-1'>YOUR ACCOUNT</p>
        <h2 className='text-4xl font-bold mb-2'>My wishlist</h2>

        <div className='flex justify-between items-center mb-6'>
          <p className='text-[#6B778E]'>Your saved finds, ready whenever you are.</p>
          <Link href="/" className='flex items-center px-6 py-2 border-2 gap-2 border-[#DFE5EE] font-bold rounded-lg hover:border-[#13244A] transition-colors'>
            Continue shopping <i className='fa-solid fa-arrow-right-long mt-0.5'></i>
          </Link>
        </div>

        <div className='flex justify-between items-center my-6 pb-4 border-b border-gray-100'>

          {/* Static Accent Heart Icon & Dynamic Saved Count */}
          <div className='flex gap-2.5 items-center font-semibold text-lg'>
            <i className='fa-solid fa-heart text-[#13244A] text-xl'></i>
            <p><span className="font-bold">{totalSavedItems}</span> {totalSavedItems === 1 ? 'saved item' : 'saved items'}</p>
          </div>

          <div className='flex gap-2 items-center text-[#6B778E] font-medium cursor-pointer'>
            <p>Sort by: <span className='text-[#13244A] font-bold'>Recently saved</span></p>
            <i className='fa-solid fa-angle-down text-sm text-[#13244A]'></i>
          </div>

        </div>

        <div className='grid grid-cols-2 gap-6 '>
          <TechHavenProductList />
          <UrbanKicksProductList />
        </div>
      </div>
    </div>
  )
}

export default WishListPage