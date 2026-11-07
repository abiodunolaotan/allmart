


import React from 'react'

const DeliveryDetailsForm = () => {
  return (
   
    <div className='p-6 border-2 border-[#DFE5EE] rounded-2xl text-[#13244A]'>
        <div className='flex gap-3 items-center'>
            <div className='flex justify-center w-10 h-10 rounded-full items-center bg-[#E7F0FF]'>
                1
            </div>

            <h4 className='text-3xl'>Delivery details</h4>
        </div>
        <div className='grid grid-cols-2 gap-4 items-center mt-5'>
            <div className='flex flex-col '>
                <label htmlFor="text" className='text-lg font-medium'>Full Name</label>
                <input type="text" name="fullname" id="fullname" placeholder='Enter recipient&apos;s full name' className='border-2 border-[#DFE5EE] placeholder:text-[#6B778E] rounded-lg px-6 py-3 mt-2'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="text" className='text-lg font-medium'>Phone Number</label>
                <input type="text" name="phonenumber" id="phonenumber" placeholder='Enter Phone Number' className='border-2 border-[#DFE5EE] placeholder:text-[#6B778E] rounded-lg px-6 py-3 mt-2'/>
            </div>
        </div>
        
        <div className ='flex flex-col mt-5'>
            <label htmlFor="text" className='text-lg font-medium'>Delivery address</label>
            <input type="text" name="deilveryaddress" id="deilveryaddress" placeholder='1123 Dev Avenue, Lagos.' className='w-full border-2 border-[#DFE5EE] placeholder:text-[#13244A] rounded-lg px-6 py-3 mt-2' />
        </div>

        <p className='text-[#6B778E] mt-5'>Add your name and phone number so we can contact you about delivery.</p>
    </div>

  
  )
}

export default DeliveryDetailsForm
