

import React from 'react'
import Button from './Button'
import Searchsection from './Searchsection'

const NewsLetter = () => {
  return (
    <div className='bg-[#e7f0ff] mb-6'>
      <div className='mx-auto max-w-7xl flex justify-between py-9 items-center text-[#13244A]'>
        <div>
          <p className='text-sm font-medium'>LET&apos;S KEEP IN TOUCH</p>
          <h3 className='text-3xl font-bold'>Good finds. Straight to your inbox.</h3>
          <p className='text-[#6B778E]'>Store stories, shopping inspiration and fresh edits from AllMart.</p>
        </div>

        <div className='relative'>
          
          
          <form action="#" className='flex flex-col'>
            <label htmlFor="newsletter" className='font-bold '>Email address</label>
            <input type="email" name="newsletter" id="newsletter" placeholder='Enter your email address' className='w-130 bg-white py-5 px-13 rounded-2xl pr-35 my-3 border-2 border-[#DFE5EE]'/>
          
          <p className='text-[#6B778E]'>Unsubscribe whenever you like. Read our Privacy Policy.</p>
          
          <Button
            label="Subscribe"
            className="bg-[#13244A] text-white w-30 absolute top-12 left-98 cursor-pointer hover:bg-[#2C65C7]"
            href="/"
          />
          </form>
          <i className='fa-regular fa-envelope absolute top-14 left-5 text-2xl'></i>
          
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
