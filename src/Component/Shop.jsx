import React from 'react';
import list from '../List.js'
import Card from './Card.jsx';

const Shop = ({handleClick}) => {
  return (
    <div>
      <section>
        {list.map((item)=>(
            <Card item={item} key={item.id} handleClick={handleClick} />
        ))}
      </section>
    </div>
  )
}

export default Shop
