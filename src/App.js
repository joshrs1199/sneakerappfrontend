import React from 'react'
// import {BrowserRouter,NavLink} from 'react-router-dom'
import SneakerContainer from '../src/container/SneakerContainer.js';
import CartContainer from '../src/container/CartContainer';
import Filter from '../src/components/Filter.js'
import NavBar from '../src/components/NavBar.js'
// import { Route, Switch, Redirect } from 'react-router-dom';
import Form from '../src/components/Form.js';
import Confirmation from '../src/components/Confirmation.js';
import './App.css';

class App extends React.Component{

   link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

state = {
  sneakers: [],
  clickedSneakers: [],
  filtered: "",
}

//set state for sneakers
//clickedSneakers is the sneakers that were clicked and added to the cartContainer
//filtered sneakers is changing the state of the

// handleSubmit(event){
//   event.preventDefault()
//   this.setState({
//     submit: event.target.value
//   })
// }


componentDidMount(){
  fetch('http://localhost:3000/sneakers')
  .then(res=>res.json())
  .then(allSneakers =>{
    this.setState({
      sneakers: allSneakers
    })
  })
}



handleFormSubmit = (event, shoeObj) => {
  event.preventDefault();
  fetch('http://localhost:3000/sneakers' , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(shoeObj)
  })
  .then(resp => resp.json())
  .then(sneaker => {
    this.setState(prevState =>({
      sneakers: [...prevState.sneakers, sneaker]
    }))
  })
}

buyNowClick = (sneakerID) => {
  let sneaker = this.state.sneakers.find(sneaker => sneaker.id === sneakerID)
  let updatedSneakerList = this.state.sneakers.filter(sneaker => sneaker.id !== sneakerID)
  // let filteredSneaker = this.state.clickedSneakers.filter(sneaker => sneaker.id !== sneakerID)
  fetch(`http://localhost:3000/sneakers/${sneakerID}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(sneaker)
  })
  .then(response => response.json())
  .then(sneaker => {
    this.setState({
      sneakers: updatedSneakerList
    })
  })
}

shoppingCartClick = (sneakerid) => {
  let sneaker = this.state.sneakers.find(sneaker => sneaker.id === sneakerid)
  this.setState(prevState => ({
    clickedSneakers: [...prevState.clickedSneakers, sneaker]
  }))
}


handleFilterChange = (event) => {
  this.setState({
    filtered: event.target.value
  })
}

handleClick = (sneakerId) => {
  let filteredSneaker = this.state.clickedSneakers.filter(sneaker => sneaker.id !== sneakerId)
  this.setState({
    clickedSneakers: filteredSneaker
  })
}

handleAddInCart = (sneakerId) => {
  console.log(sneakerId)
}

render(){

return (

    <div className="App" style={{ backgroundImage: "url()" }} >
      <NavBar clickedNavBar={this.clickedNavBar}/>
    <Filter filtered={this.state.filtered} handleFilterChange={this.handleFilterChange} />
        <SneakerContainer handleClick={this.handleClick} sneakers={this.state.sneakers} shoppingCartClick={this.shoppingCartClick} filtered={this.state.filtered} buyNowClick={this.buyNowClick}/>
        <CartContainer handleClick={this.handleClick} clickedSneakers={this.state.clickedSneakers} buyNowClick={this.buyNowClick} shoppingCartClick={this.handleAddInCart}/>
      <h3>
        <Form handleFormSubmit={this.handleFormSubmit} updateShoeStore={this.updateShoeStore} allSneakers={this.sneakers}/>
      </h3>
  </div>
    );
  }
}

export default App;

// <NavBar clickedNavBar={this.clickedNavBar} />
