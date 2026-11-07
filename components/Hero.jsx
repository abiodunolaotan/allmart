

import React from 'react'
import Searchsection from '@/components/Searchsection'
import { categories } from '@/constants/mockData'


const HeroPage = () => {
  const [ firstCategory, secondCategory, thirdCategory, fourthCategory ] = categories;
  const remainingCategories = categories.slice(1);

  

  return (
    <div>
      <p className='mx-auto max-w-7xl text-2xl font-medium mb-3'>Welcome to AllMart</p>

      <div className="mx-auto max-w-7xl py-10 px-8 bg-[#E7F0FF] rounded-2xl grid grid-cols-2 gap-4 items-center my-6">
        <div className='text-[#13244A]'>
          <p className="text-lg font-semibold">INDEPENDENT STORES. ENDLESS GOOD FINDS.</p>
          <h1 className="text-5xl font-bold">Find your <br/>kind of store</h1>
          <p className="text-[#6B778E]">Discover thoughtful products from stores worth knowing.</p>
        </div>

        <div>
          <p className="text-[#6B778E] mb-2">2 stores - 4 products</p>
          <div>
            <Searchsection />

            <div className="relative">
            
              <i className="fa-solid fa-magnifying-glass absolute bottom-5 left-3 "></i>
            </div>

          </div>

        </div>

      </div>

      <div>
        <div className="mx-auto max-w-7xl flex justify-between my-6 items-center text-[#13244A]">
          
          <div className="flex gap-4">
            <div className={firstCategory.className}>
              <h2 className="text-xl font-semibold  text-white">{firstCategory.name}</h2>
            </div>
            {
            remainingCategories.map((category) => (
              <div key={category.id}>
                <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
              </div>
            ))}
          </div>
          

          <p>Sort by: <span className="font-semibold">Recommended</span></p>
          
          
        </div>

        
      </div>
    </div>
  )
}

export default HeroPage
