import React from 'react';
import SneakerCard from '../../src/components/SneakerCard.js';
import { Grid, Image } from 'semantic-ui-react'




const sneakerContainer = (props) => {
let filteredSneakers = props.sneakers.filter(sneaker => sneaker.name.toLowerCase().includes(props.filtered.toLowerCase()))
return (
    <div>
        {filteredSneakers.map(sneaker=>{
          return <SneakerCard sneaker={sneaker} key={sneaker.id} shoppingCartClick={props.shoppingCartClick} />
        })}
    </div>
  )
}


export default sneakerContainer;
