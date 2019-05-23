import React from 'react';
import SneakerCard from '../../src/components/SneakerCard.js';

const cartContainer = (props) => {

return(

  <div>
      <h1>Shopping Cart</h1>
      {props.clickedSneakers.map(sneaker =>{
        return <SneakerCard sneaker={sneaker} shoppingCartClick={props.removeCartClick} />
      })}
  </div>
)
}

export default cartContainer;
