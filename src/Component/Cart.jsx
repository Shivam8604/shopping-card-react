/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'

const Cart = ({cart,setCart}) => {

    const [price , setPrice] = useState(0);

  return (
    <div>
       {
        cart?.map((item) => (
            <div className='cart_box' key={item.id}>
                <div className='cart_img'>
                    <img src={item.img}/>
                    <p>{item.title}</p>

                </div>
                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
                <div>
                    <span>{item.price}</span>
                    <span>remove</span>
                </div>
            </div>
        )) 
       }
    </div>
  )
}

export default Cart
