import React from 'react';
import logo from './logo.svg';
import SneakerContainer from '../src/container/SneakerContainer.js';
import CartContainer from '../src/container/CartContainer';
import './App.css';

class App extends React.Component{


state = {
  sneakers: [],
  clickedSneakers: []
}

componentDidMount() {
  fetch('http://localhost:3001/sneakers')
  .then(res=>res.json())
  .then(allSneakers =>{
    this.setState({
      sneakers: allSneakers
    })
  })
}

shoppingCartClick = (sneakerid) => {
  let sneaker = this.state.sneakers.find(sneaker => sneaker.id === sneakerid)
  this.setState(prevState => ({
    clickedSneakers: [...prevState.clickedSneakers, sneaker]
  }))
}

removeCartClick = (sneakerId) => {
  console.log(sneakerId)
  let filteredSneaker = this.state.clickedSneakers.filter(sneaker => sneaker.id !== sneakerId)
  this.setState({
    clickedSneakers: filteredSneaker
  })
}


render(){
  console.log(this.state.clickedSneakers)
  return (
    <div className="App">
      <SneakerContainer sneakers={this.state.sneakers} shoppingCartClick={this.shoppingCartClick}/>
      <CartContainer clickedSneakers={this.state.clickedSneakers} removeCartClick={this.removeCartClick}/>
    </div>
    );
  }
}

export default App;
