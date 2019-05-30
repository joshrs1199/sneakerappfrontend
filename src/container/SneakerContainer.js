import React from 'react';
import SneakerCard from '../../src/components/SneakerCard.js';
import { Grid } from "semantic-ui-react";





const sneakerContainer = (props) => {
let filteredSneakers = props.sneakers.filter(sneaker => sneaker.name.toLowerCase().includes(props.filtered.toLowerCase()))
return (
    <div>
      <Grid relaxed="very" columns={3}>
        {filteredSneakers.map(sneaker=>{
          return <SneakerCard handleClick={props.buyNowClick} buyNowClick={props.buyNowClick} sneaker={sneaker} key={sneaker.id} shoppingCartClick={props.shoppingCartClick} />
        })}
      </Grid>
    </div>
  )
}


export default sneakerContainer;
