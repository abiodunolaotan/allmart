

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {vendors} from '@/constants/mockData'

const OrderHistoryPage = () => {
    const {name, products} = vendors;
  return (
    <div className='text-[#13244A] mx-auto max-w-7xl mt-10 bg-[#F8FAFD]'>
       
        <p className='text-[#6B778E] font-medium mb-4'>YOUR ACCOUNT</p>
        <h3 className='text-3xl font-medium'>Your orders</h3>
        <div className='flex justify-between items-center'>
            <p className='text-[#6B778E] mt-4'>All your good finds, with every detail in one place.</p>
            <p><Link href="/"> Continue shopping <i className='fa-solid fa-arrow-right-long'></i></Link></p>
        </div>

        <div className='flex justify-between items-center my-7'>

            <div className='flex gap-3 items-center'>
                <div className='flex justify-center items-center bg-[#13244A] text-white h-10 w-29 rounded-full'>All orders 1</div>

                <div className='border-2 border-[#DFE5EE] h-10 w-29 rounded-full flex justify-center items-center'>In progress 0</div>

                <div className='flex justify-center items-center border-2 border-[#DFE5EE] h-10 w-29 rounded-full'>Delivered 1</div>
            </div>

            <div className='flex gap-2   items-center'>
                <i className="fa-regular fa-calendar-days"></i>
                <p>Last 3 months</p>
                <i className='fa-solid fa-chevron-down'></i>
            </div>

        </div>

        <div className='flex justify-between items-center p-5 bg-[#F1F5FA] rounded-t-2xl border-x-2 border-x-[#dfe5ee] border-t-2 border-t-[#dfe5ee]'>

            <div>
                <h5 className='text-lgn font-bold mb-2'>Order ORD-10928</h5>
                <p className='text-[#6B778E]'>Placed October 25, 2026 · 10:00 UTC · Tech Haven + Urban Kicks</p>
            </div>

            <div className='flex justify-center items-center text-[#23755D] bg-[#E8F5EE] h-8 w-25 font-medium rounded-full'>
                Delivered
            </div>

        </div>


        <div className='p-7 grid grid-cols-[3fr_1fr] gap-10 border-l-2 border-l-[#DFE5EE] border-r-2 border-[#dfe5ee]'>

            <div>

                <div className='grid grid-cols-[1fr_9fr] gap-4 mb-5'>
                    <Image
                    src="/images/cartheadphone.png"
                    alt='Tech haven'
                    width={96}
                    height={96}
                    />

                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-medium'>{vendors[0].products[0].name}</p>
                            <p className='text-[#6B778E] my-2'>{vendors[0].name}</p>
                            <p className='text-[#6B778E]'>Qty 1 x ₦150,000</p>
                        </div>
                        <p className='font-medium'>₦150,000</p>
                    </div>
                </div>

                <div className='grid grid-cols-[1fr_9fr] gap-4 mb-5'>
                    <Image
                    src="/images/cartcotton.png"
                    alt='Tech haven'
                    width={96}
                    height={96}
                    />

                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-medium'>{vendors[1].products[1].name}</p>
                            <p className='text-[#6B778E] my-2'>{vendors[1].name}</p>
                            <p className='text-[#6B778E]'>Qty 1 x ₦150,000</p>
                        </div>
                        <p className='font-medium'>₦150,000</p>
                    </div>
                </div>

                <div className='grid grid-cols-[1fr_9fr] gap-4 mb-5'>
                    <Image
                    src="/images/cartmarttv.png"
                    alt='Tech haven'
                    width={96}
                    height={96}
                    />

                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-medium'>{vendors[0].products[1].name}</p>
                            <p className='text-[#6B778E] my-2'>{vendors[0].name}</p>
                            <p className='text-[#6B778E]'>Qty 1 x ₦150,000</p>
                        </div>
                        <p className='font-medium'>₦150,000</p>
                    </div>
                </div>

                <div className='grid grid-cols-[1fr_9fr] gap-4 mb-5'>
                    <Image
                    src="/images/cartshoe.png"
                    alt='Tech haven'
                    width={96}
                    height={96}
                    />

                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-medium'>{vendors[1].products[0].name}</p>
                            <p className='text-[#6B778E] my-2'>{vendors[1].name}</p>
                            <p className='text-[#6B778E]'>Qty 1 x ₦150,000</p>
                        </div>
                        <p className='font-medium'>₦150,000</p>
                    </div>
                </div>

                <hr className='text-[#DFE5EE] border-2'/>

                <div className='flex gap-4 items-center'>
                    <i className='fa-solid fa-location-dot'></i>
                    <div className='flex flex-col'>
                        <p>Delivery address</p>
                        <p>123 Dev Avenue, Lagos</p>
                    </div>
                </div>
            </div>

            <div className='px-5 border-l-2 h-63 border-l-[#DFE5EE]'>

                <div className='flex items-center justify-between'>
                    <p className='text-[#6B778E]'>Subtotal</p>
                    <p className='font-medium'>₦670,000</p>
                </div>

                <div className='flex items-center justify-between my-3'>
                    <p className='text-[#6B778E]'>Shipping</p>
                    <p className='font-medium'>₦2,500</p>
                </div>

                <hr className='text-[#DFE5EE] border-2' />
                
                <div className='flex my-3 justify-between items-center'>
                    <p className='text-[#6B778E] my-3'>Total paid</p>
                    <h4 className='font-medium text-3xl'>₦672,500</h4>
                </div>

                <Link href="/checkout">
                     <button type="button" className='py-2 rounded-lg px-6 bg-[#13244A] text-white w-full cursor-pointer'>Buy again</button>
                </Link>

                <Link href="#" className='font-medium flex justify-center text-center mt-2.5'>View receipt</Link>
            </div>

        </div>

        <div className=' p-7 border-2 border-[#DFE5EE] flex justify-between items-center rounded-b-2xl'>
            <div className=' flex gap-3 items-center'>
                <i className='fa-solid fa-envelope-circle-check text-[#23755D] text-2xl'></i>
                <p>Delivered</p>
            </div>

            <p>Need help?<span><Link href="/contact" className='hover:underline'>Contact support</Link></span></p>
        </div>

        <p className='text-center text-[#6B778E] my-6'>You&apos;re all caught up. More good finds await.</p>

    </div>
  )
}

export default OrderHistoryPage
