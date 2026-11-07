


import Link from 'next/link'
import React from 'react'
import {vendors} from '@/constants/mockData'
import Image from 'next/image';

const OrderReceivedPage = () => {

    const {name, products} = vendors;
  return (
    <div className='bg-[#F8FAFD]'>
        <div className='mx-auto max-w-7xl text-[#13244A] py-7'>

            <div className='flex gap-3 items-center mb-7'>
                <p className='text-[#6B778E]'>My orders</p>
                <i className='fa-solid fa-chevron-right'></i>
                <p>ORD-10928</p>
            </div>

            <div className='flex justify-between items-center mb-5'>
                <div>
                    <h3 className='text-3xl font-medium mb-3'>Order ORD-10928</h3>
                    <p className='text-[#6B778E]'>Order placed October 25, 2026 · 4 items from 2 stores</p>
                </div>
                <Link href="/orderhistory" className='px-6 py-3 rounded-lg border-2 border-[#DFE5EE] font-medium'>View order</Link>
            </div>

            <div className='bg-[#E7F0FF] border-2 border-[#DFE5EE] p-5 grid grid-cols-[1fr_14fr] rounded-2xl items-center'>
                <div className='w-15 h-15 rounded-full bg-[#13244A] flex justify-center items-center'><i className='fa-solid fa-check text-white text-2xl'></i></div>
                <div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h5 className='mb-1.5 text-2xl font-medium'>Order received</h5>
                            <p className='text-[#6B778E]'>We’ve received your order and are preparing the four items from Tech Haven and Urban Kicks.</p>
                        </div>
                        <div className='flex gap-3 justify-center items-center bg-[#ffffff] w-42 h-10 rounded-full font-bold'>
                            <i className='fa-solid fa-check'></i>
                            <p>Order received</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-6 grid grid-cols-[7fr_2.5fr] gap-7'>

                <div>
                    <div className='p-5 border-2 border-[#DFE5EE] rounded-2xl bg-white'>
                        <p className='text-lg font-medium'>Items ordered</p>

                        <div className='flex items-center gap-3 my-3'>
                            <i className='fa-solid fa-building'></i>
                            <p className='font-medium'>{vendors[0].name}</p>
                            <p className='text-[#6B778E]'>2 items</p>
                        </div>

                        <hr className='text-[#DFE5EE] mb-3' />
                        
                        <div className='grid grid-cols-[1fr_11fr] gap-4 mb-5'>
                            <Image
                            src="/images/cartheadphone.png"
                            alt='Tech haven'
                            width={96}
                            height={96}
                            />
        
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className='font-medium'>{vendors[0].products[0].name}</p>
                                    <p className='text-[#6B778E] my-2'>{vendors[0].description}</p>
                                    <p className='text-[#6B778E]'>Quantity 1</p>
                                </div>
                                <p className='font-medium'>₦150,000</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-[1fr_11fr] gap-4 mb-5'>
                            <Image
                            src="/images/cartmarttv.png"
                            alt='Tech haven'
                            width={96}
                            height={96}
                            />
        
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className='font-medium'>{vendors[0].products[1].name}</p>
                                    <p className='text-[#6B778E] my-2'>{vendors[0].products[1].description}</p>
                                    <p className='text-[#6B778E]'>Quantity 1</p>
                                </div>
                                <p className='font-medium'>₦450,000</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-3 mb-3'>
                            <i className='fa-solid fa-building'></i>
                            <p className='font-bold'>{vendors[1].name}</p>
                            <p className='text-[#6B778E]' >2 items</p>
                        </div>

                        <hr className='text-[#DFE5EE] mb-3' />

                        <div className='grid grid-cols-[1fr_11fr] gap-4 mb-5'>
                            <Image
                            src="/images/cartshoe.png"
                            alt='Tech haven'
                            width={96}
                            height={96}
                            />
        
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className='font-medium'>{vendors[1].products[0].name}</p>
                                    <p className='text-[#6B778E] my-2'>{vendors[1].description}</p>
                                    <p className='text-[#6B778E]'>Quantity 1</p>
                                </div>
                                <p className='font-medium'>₦45,000</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-[1fr_11fr] gap-4'>
                            <Image
                            src="/images/cartcotton.png"
                            alt='Tech haven'
                            width={96}
                            height={96}
                            />
        
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className='font-medium'>{vendors[1].products[0].name}</p>
                                    <p className='text-[#6B778E] my-2'>{vendors[1].products[1].description}</p>
                                    <p className='text-[#6B778E]'>Quantity 1</p>
                                </div>
                                <p className='font-medium'>₦25,000</p>
                            </div>
                        </div>
                    </div>

                    <div className='p-5 border-2 border-[#DFE5EE] rounded-2xl bg-white mt-6'>
                        <div className='grid grid-cols-[1fr_24fr] items-center'>
                            <i className='fa-solid fa-location-dot fa-beat'></i>
                            <div>
                                <p>Delivery address</p>
                                <p>123 Dev Avenue, Lagos</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-5 border-2 border-[#DFE5EE] rounded-2xl h-87 bg-white'>
                    <p className='text-lg font-medium'>Order summary</p>

                    <hr className='text-[#DFE5EE] my-3' />

                    <div className='flex justify-between items-center mb-3'>
                        <p className='text-[#6B778E]'>Subtotal (4 items)</p>
                        <p>₦670,000</p>
                    </div>

                    <div className='flex justify-between items-center mb-3'>
                        <p className='text-[#6B778E]'>Shipping</p>
                        <p>₦2,500</p>
                    </div>

                    <div className='p-4 bg-[#E7F0FF] rounded-lg flex justify-between items-center mb-4'>
                        <p className='font-medium'>Total paid</p>
                        <h4 className='text-3xl font-medium'>₦672,500</h4>
                    </div>

                    <Link href="/" className='flex justify-center bg-[#13244A] text-white rounded-lg py-3'>Continue shopping</Link>

                    <p className='text-center text-[#6B778E] mt-3'>This delivered order is separate from the 4 items currently in your cart.</p>

                </div>

            </div>

        </div>
    </div>
  )
}

export default OrderReceivedPage
