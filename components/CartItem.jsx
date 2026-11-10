import {vendors} from '@/constants/mockData'
import Image from 'next/image'


import React from 'react'

const CartItem = () => {
    const {products} = vendors
  return (
    <div>
    { vendors.map((company) => (
        <div key={company.id}>
            <div className="flex gap-3 items-center font-bold mt-2">
                <i className="fa-solid fa-building"></i>
                <p>{company.name}</p>
            </div>

            {company.products.map((product) => (
                <div key={product.id}>                    <div  className="grid grid-cols-[1fr_13fr] gap-3.5 items-center mt-2">
                        <div className="bg-[#C4CED3] w-25 h-25 flex justify-center items-center rounded-2xl">
                            <Image
                            src={product.image}
                            alt={product.name}
                            width={90}
                            height={100}
                            className="bg-cover bg-center"
                            />
                        </div>

                        <div>

                            <div className="flex justify-between items-center">
                                <p className="font-bold">{product.name}</p>

                                <button>
                                    <i className="fa-solid fa-x"></i>
                                </button>
                            </div>

                            <p className="text-[#6B778E] my-2">₦{product.price.toLocaleString()} each</p>

                            <div className="flex items-center justify-between">
                                <div className="flex justify-center w-20 h-10 border-2 border-[#DFE5EE] items-center gap-3 rounded-lg">
                                    <button><i className="fa-solid fa-minus"></i></button>
                                    <p></p>
                                    <button><i className="fa-solid fa-plus"></i></button>
                                </div>

                                <p className="font-bold">₦{product.price.toLocaleString()}</p>
                            </div>
                        </div>

                        
                    </div>

                    
                </div>

                
            ))}
            
        </div>
        
        ))
    }
    </div>
  )
}

export default CartItem
