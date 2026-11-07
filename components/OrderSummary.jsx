
import {vendors} from '@/constants/mockData'
import Image from 'next/image'
import Link from 'next/link'



const OrderSummary = () => {

    const {name, products} = vendors
  return (
    <div className="text-[#13244A] border-2 border-[#DFE5EE] p-6 rounded-2xl">

        <div className='flex justify-between items-center'>
            <h3 className='text-3xl font-medium mb-2'>Order summary</h3>
            <p className='text-[#6B778E]'>4 items</p>
        </div>

        <hr className='border-2 border-[#DFE5EE]' />

      
        <div className='flex justify-between items-center mt-2'>
            <div className='flex gap-3 items-center'>
                <i className="fa-solid fa-building"></i>
                <p className='text-lg font-medium '>{vendors[0].name}</p>
            </div>
            <p className='text-[#6B778E]'>2 items</p>
        </div>

        <div className='flex gap-4 items-center my-3'>

            <Image
            src="/images/cartheadphone.png"
            alt='Tech Haven'
            width={100}
            height={100}
            />

            <div>
                <p className='text-lg font-medium mb2'>{vendors[0].products[0].name}</p>
                <div className='flex justify-between items-center'>
                    <p className='text-[#6B778E]'>Qty 1</p>
                    <p className='text-lg font-medium'>₦150,000</p>
                </div>
            </div>

        </div>


        <div className='flex gap-4 items-center mb-3'>

            <Image
            src="/images/cartmarttv.png"
            alt='Tech Haven'
            width={84}
            height={80}
            />

            <div>
                <p className='text-lg font-medium mb-5'>{vendors[0].products[1].name}</p>
                <div className='flex justify-between items-center'>
                    <p className='text-[#6B778E]'>Qty 1</p>
                    <p className='text-lg font-medium ml-38'>₦450,000</p>
                </div>
            </div>

        </div>

        <hr className='border-2 border-[#DFE5EE]' />

        <div className='flex justify-between items-center my-4'>
            <div className='flex gap-3 items-center'>
                <i className="fa-solid fa-building"></i>
                <p className='text-lg font-medium'>{vendors[1].name}</p>
            </div>
            <p className='text-[#6B778E]'>2 items</p>
        </div>

        <div className='flex gap-4 items-center mb-3'>

            <Image
            src="/images/cartshoe.png"
            alt='Tech Haven'
            width={84}
            height={80}
            />

            <div>
                <p className='text-lg font-medium mb-6'>{vendors[1].products[0].name}</p>
                <div className='flex justify-between items-center'>
                    <p className='text-[#6B778E]'>Qty 1</p>
                    <p className='text-lg font-medium ml-39'>₦45,000</p>
                </div>
            </div>

        </div>


        <div className='flex gap-4 items-center mb-3'>

            <Image
            src="/images/cartcotton.png"
            alt='Tech Haven'
            width={84}
            height={80}
            />

            <div>
                <p className='text-lg font-medium mb-5'>{vendors[1].products[1].name}</p>
                <div className='flex justify-between items-center'>
                    <p className='text-[#6B778E]'>Qty 1</p>
                    <p className='text-lg font-medium ml-39'>₦25,000</p>
                </div>
            </div>

        </div>

        <hr className='border-2 border-[#DFE5EE]'/>

        <div className='flex justify-between items-center mb-2'>
            <p className='text-[#6B778E]'>Subtotal (4 items)</p>
            <p className='text-lg font-medium'>₦670,000</p>
        </div>

        <div className='flex justify-between items-center mb-2'>
            <p className='text-[#6B778E]'>shipping fee</p>
            <p className='text-lg font-medium'>₦2,500</p>
        </div>

        <p className='text-[#6B778E] text-sm mb-2'>Illustrative flat fee for this example.</p>

        <div className="flex justify-between font-bold items-center px-4 py-2 bg-[#E7F0FF] rounded-lg mb-5">
            <p>Total</p>
            <h2 className='text-lg font-medium'>₦672,500</h2>
        </div>


        <Link href="/orderreceived">
            <button 
                type="button"
                className="w-full bg-[#13244A] text-white py-3 rounded-lg font-bold hover:bg-[#2c65c7] transition-colors"
                >
                Pay Now · ₦672,500
            </button>
        </Link>

        <p className="text-center mt-2 text-[#6B778E]"><i className="fa-solid fa-lock"></i> Secure checkout with AllMart</p>
      
    </div>
  )
}

export default OrderSummary
