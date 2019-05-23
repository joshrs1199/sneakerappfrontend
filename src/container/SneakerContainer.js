import React from 'react';
import SneakerCard from '../../src/components/SneakerCard.js';

const sneakerContainer = (props) => {

return (
    <div>
        {props.sneakers.map(sneaker=>{
          return <SneakerCard sneaker={sneaker} shoppingCartClick={props.shoppingCartClick}/>
        })}
    </div>
)

}


export default sneakerContainer;
