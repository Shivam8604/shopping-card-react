import React from 'react';
import '../Styles/Card.css'

const Card = ({item}) => {
  return (
    <div className='cards'>
        <div className='image_box'>
            <img src={item.img} alt='img'/>
        </div>
        <div className='detials'>
            <p> {item.title} </p>
            <p> {item.author} </p>
            <p>price- {item.price} Rs.</p>
            <button>Add to Card </button>
        </div>
    </div>
  )
}

export default Card
