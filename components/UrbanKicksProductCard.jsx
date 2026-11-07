"use client";

import { vendors } from '@/constants/mockData'
import Image from 'next/image';
import Button from './Button';
import { useCart } from '@/context/CartContext';
import HeartButton from './HeartButton';
import Link from 'next/link';

const UrbanKicksProductCard = () => {

    const {products}= vendors[1];
    
        const { addToCart } = useCart();
    
        const handleAddToCart = (product) => {
            addToCart(product);
        };
  return (
   <div>
        <div className='grid grid-cols-2 gap-6'>
            <div className='rounded-2xl border-2 border-[#DFE5EE]'>
                <div key={products[0].id} className="bg-[#C4CED3] w-full h-56 flex justify-center items-center rounded-tr-2xl rounded-tl-2xl">
                    <Image 
                    src={products[0].image}
                    alt={products[0].name}
                    width={222} 
                    height={230} 
                    className='bg-cover w-80 h-full shadow-[0_4px_6px_rgba(0,0,0,0.1)]'/>
                </div>

                <div className='flex flex-col gap-2 p-3 relative'>
                    <h3 className='font-bold text-[#13244A]'>{products[0].name}</h3>
                    <p className='mt-6 text-[#6B778E]'>{products[0].description}</p>
                    <div className='flex justify-between'>
                        <h2 className='font-bold text-[#13244A]'>₦{products[0].price.toFixed(2)}</h2>
                        <p className='font-medium text-[#13244A]'>View details</p>
                    </div>
                    <Button 
                        label="Add to Cart" 
                        className="bg-[#13244A] text-white hover:bg-blue-900 w-full mt-4 cursor-pointer" 
                        onClick={() => handleAddToCart(products[0])}
                    />

                    <div className='flex justify-center items-center rounded-full w-8 h-8 border-2 border-[#DFE5EE] bg-white absolute -top-50 right-5 '>
                       <HeartButton product={products[0]} />
                    </div>

                </div>
            </div>

            <div className='rounded-2xl border-2 border-[#DFE5EE]'>
                <div key={products[1].id} className="bg-[#C4CED3] w-full h-56 flex justify-center items-center rounded-tr-2xl rounded-tl-2xl">
                    <Image 
                    src={products[1].image}
                    alt={products[1].name}
                    width={435} 
                    height={230}
                    className='bg-cover w-60 h-full rounded-t-2xl' />
                </div>

                <div className='flex flex-col gap-2 p-3 relative'>
                    <h3 className='font-bold text-[#13244A]'>{products[1].name}</h3>
                    <p className='mt-6 text-[#6B778E]'>{products[1].description}</p>
                    <div className='flex justify-between'>
                        <h2 className='font-bold text-[#13244A]'>₦{products[1].price.toFixed(2)}</h2>
                        <p className='font-medium text-[#13244A]'>View details</p>
                    </div>
                    <Button 
                        label="Add to Cart" 
                        className="bg-[#13244A] text-white hover:bg-blue-900 w-full mt-4 cursor-pointer" 
                        onClick={() => handleAddToCart(products[1])}
                    />

                    <div className='flex justify-center items-center rounded-full w-8 h-8 border-2 border-[#DFE5EE] bg-white absolute -top-50 right-5'>
                       <HeartButton product={products[1]} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UrbanKicksProductCard
