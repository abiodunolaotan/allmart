

import React from 'react'
import Button from './Button'

const HeroCTA = () => {
  return (
    <div>
      <div className='flex justify-center gap-40 mx-auto max-w-7xl items-center bg-[#13244A] p-8 rounded-2xl mb-6'>
        <div className='text-white'>
            <p className='text-sm'>YOUR NEXT FINDING IS AWAITING</p>
            <h2 className='text-4xl font-bold'>Your Kind of stores.</h2>
            <h2 className='text-4xl font-bold'>Your kind of finds</h2>
            <p>Explore Tech Haven and Urban Kicks. Find something that feels like you.</p>
        </div>

        <div>
            <Button
            label="Start Shopping →"
            className="text-[#13244A] bg-white font-medium"
            />
        </div>
      </div>
    </div>
  )
}

export default HeroCTA
