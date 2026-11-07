 import React from 'react'
 
 const PaymentMethod = () => {
   return (
     <div className='p-6 border-2 border-[#DFE5EE] rounded-2xl text-[#13244A]'>

        <div className='flex gap-3 items-center'>
            <div className='flex justify-center w-10 h-10 rounded-full items-center bg-[#E7F0FF]'>
                2
            </div>

            <h4 className='text-3xl'>Payment Method</h4>
        </div>

        <div className='grid grid-cols-2 gap-4 mt-5 items-center'>
            <div className='flex w-full h-13 px-6 items-center bg-[#E7F0FF] gap-2 rounded-lg '>
                <input type="radio" name="paymentmethod" id="payondelivery" className='accent-[#13244A] w-5 h-5 outline-2 focus:ring-[#13244A]'/>
                <i className='fa-regular fa-credit-card'></i>
                <p className='font-medium'>credit card</p>
            </div>

            <div className='flex w-full h-13 px-6 items-center bg-[#E7F0FF] gap-2 rounded-lg border-2 border-[#DFE5EE]'>
                <input type="radio" name="paymentmethod" id="creditcard" className='accent-[#13244A] w-5 h-5 outline-2 focus:ring-[#13244A]'/>
                <i className='fa-solid fa-money-bill'></i>
                <p>Pay on Delivery</p>
            </div>
        </div>

        <div className='mt-5'>
            <label htmlFor="text" className='text-lg font-medium'>Card number</label>
            <input type="text" name="cardnumber" id="cardnumber" placeholder='Enter card number' className='border-2 border-[#DFE5EE] placeholder:text-[#6B778E] rounded-lg px-6 py-3 w-full mt-2'/>
        </div>

        <div className='grid grid-cols-2 gap-4 mt-5 items-center'>

            <div>
                <label htmlFor="text" className='text-lg font-medium'>Expiry date</label>
                <input type="text" name="expirydate" id="expirydate" placeholder='MM / YY' className='border-2 border-[#DFE5EE] placeholder:text-[#6B778E] rounded-lg px-6 py-3 w-full mt-2' />
            </div>

            <div>
                <label htmlFor="text" className='text-lg font-medium'>CVV</label>
                <input type="text" name="cvv" id="cvv" placeholder='3-digit code' className='border-2 border-[#DFE5EE] placeholder:text-[#6B778E] rounded-lg px-6 py-3 w-full mt-2'/>
            </div>

        </div>

        <hr className='text-[#DFE5EE] mt-5' />

        <div className='mt-5 flex gap-3'>
            <input type="checkbox" name="addressconfirmation" id="addressconfirmation" className='w-5 h-5 accent-[#13244A]'/>
            <p>Billing address is the same as delivery address</p>
        </div>
     </div>
   )
 }
 
 export default PaymentMethod
 