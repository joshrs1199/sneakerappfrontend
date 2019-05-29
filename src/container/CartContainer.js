import React from 'react';
import SneakerCard from '../../src/components/SneakerCard.js';
// import Confirmation from '../../src/components/Confirmation.js';
import { Grid } from "semantic-ui-react";


const cartContainer = (props) => {

return(
  <div>
      <h1>Shopping Cart</h1>
    <Grid relaxed="very" columns={4}>
      {props.clickedSneakers.map(sneaker =>{
        return <SneakerCard sneaker={sneaker} key={sneaker.id} removeClick={props.removeClick} removeCartClick={props.removeCartClick} clickedSneakers={props.clickedSneakers}/>
      })}
    </Grid>
  </div>
)
}

export default cartContainer;
