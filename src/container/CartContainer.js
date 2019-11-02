import React from 'react';
import SneakerCard from '../../src/components/SneakerCard.js';
import Confirmation from '../../src/components/Confirmation.js';
import { Grid } from "semantic-ui-react";


const cartContainer = (props) => {

return(
  <div >
      <h1>Shopping Cart</h1>
    <Grid relaxed="very" columns={3}>
      {props.clickedSneakers.map((sneaker, index) =>{
        return <SneakerCard handleClick={props.handleClick}
                            shoppingCartClick={props.handleAddInCart}
                            sneaker={sneaker}
                            key={`${sneaker.id} - ${index}`}
                            buyNowClick={props.buyNowClick}
                            clickedSneakers={props.clickedSneakers}
                            status={props.status}
                            />

                              }
                          )
}
    </Grid>
    <h3>
    <Confirmation clickedSneakers={props.clickedSneakers}/>
    </h3>
  </div>
)
}

export default cartContainer;
