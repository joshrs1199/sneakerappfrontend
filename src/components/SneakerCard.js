import React from 'react';
import { Grid, Image } from "semantic-ui-react";
import Button from 'react-bootstrap/Button'

const sneakerCard = (props) => {
  return(
        <Grid.Column >
          <h1>{props.sneaker.name}</h1>
            <Image src={props.sneaker.image_url} alt={props.sneaker.image_url}/>
          <h3>Price: ${props.sneaker.price}</h3>
          <h4>{props.sneaker.description}</h4>
          <h4>Colorway: {props.sneaker.colorway.toUpperCase()} </h4>
        <Button id="button" onClick={() => props.shoppingCartClick(props.sneaker.id)} key={props.sneaker.id} variant="outline-primary">Add To Cart</Button>
        <Button id="button" onClick={() =>props.handleClick(props.sneaker.id)} variant="outline-primary">Remove</Button>
        </Grid.Column>
  )
}

export default sneakerCard;
