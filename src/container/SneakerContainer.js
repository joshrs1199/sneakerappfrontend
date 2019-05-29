import React from 'react';
import SneakerCard from '../../src/components/SneakerCard.js';
import { Grid, Image } from "semantic-ui-react";





const sneakerContainer = (props) => {
let filteredSneakers = props.sneakers.filter(sneaker => sneaker.name.toLowerCase().includes(props.filtered.toLowerCase()))
return (
    <div>
      <Grid relaxed="very" columns={4}>
        {filteredSneakers.map(sneaker=>{
          return <SneakerCard removeClick={props.removeClick} sneaker={sneaker} key={sneaker.id} shoppingCartClick={props.shoppingCartClick} removeCartClick={props.removeCartClick} />
        })}
      </Grid>
    </div>
  )
}


export default sneakerContainer;
