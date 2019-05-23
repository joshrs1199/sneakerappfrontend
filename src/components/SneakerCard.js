import React from 'react';


const sneakerCard = (props) => {
  return(
    <div onClick={() => props.shoppingCartClick(props.sneaker.id)}>
      <h1>{props.sneaker.name}</h1>
      <img src={props.sneaker.image_url} height="150px" width="150px"/>
    </div>
  )
}
export default sneakerCard;
