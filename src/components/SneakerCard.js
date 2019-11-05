import React from 'react';
import { Grid, Image } from "semantic-ui-react";
import Button from 'react-bootstrap/Button'

class sneakerCard extends React.Component {

state = {
  expanded: false
}

getMoreInfo = () => {
  this.setState({
    expanded: !this.state.expanded
  })
}
  render(props) {
 var dots = this.state.expanded ? null : ' ... '
 var span = <span>{this.state.expanded ? <button id="simple-button"onClick={ () => this.getMoreInfo()}>  Read Less</button> : <button id="simple-button" onClick={ () => this.getMoreInfo()}>Read More</button>}
</span>
  return(
        <Grid.Column >
          <h1>{this.props.sneaker.name}</h1>
            <Image src={this.props.sneaker.image_url} alt={this.props.sneaker.image_url}/>
          <h3>Price: ${this.props.sneaker.price}</h3>
          {this.state.expanded ? <h4>{this.props.sneaker.description.slice(0,this.props.sneaker.description.length)}{span}</h4>: <h4>{this.props.sneaker.description.slice(0,50) + dots}{span}</h4> }
          <h4>Colorway: {this.props.sneaker.colorway.toUpperCase()} </h4>
          {this.props.status === "checkout" ? <Button id="cart-button" onClick={() =>this.props.handleClick(this.props.sneaker.id)} variant="outline-primary">Remove</Button>
            :
            <Button id="cart-button" onClick={() => this.props.shoppingCartClick(this.props.sneaker.id)} key={this.props.sneaker.id} variant="outline-primary">Add To Cart</Button>
              }
        </Grid.Column>
  )
}
}

export default sneakerCard;
