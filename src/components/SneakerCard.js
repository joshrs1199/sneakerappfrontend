import React from 'react';



const sneakerCard = (props) => {

  return(

        <div onClick={() => props.shoppingCartClick(props.sneaker.id)} key={props.sneaker.id}>
          <h1>{props.sneaker.name}</h1>
            <img src={props.sneaker.image_url} height="300px" width="400px" alt={props.sneaker.image_url}/>
          <h3>Price: ${props.sneaker.price}</h3>
        </div>
  )
}

export default sneakerCard;
