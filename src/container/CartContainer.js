import React from 'react';
import SneakerCard from '../../src/components/SneakerCard.js';
import Confirmation from '../../src/components/Confirmation.js';
import { Grid, Image } from "semantic-ui-react";


const cartContainer = (props) => {

return(
  <div>
      <h1>Shopping Cart</h1>
      {props.clickedSneakers.map(sneaker =>{
        return <SneakerCard sneaker={sneaker} shoppingCartClick={props.removeCartClick} key={sneaker.id} />
      })}
      <h1>Checkout Details</h1>
      <h3>
      {props.clickedSneakers.map(sneaker => {
        return <Confirmation key={sneaker.id} sneaker={sneaker}/>
      })}</h3>
  </div>
)
}

export default cartContainer;
