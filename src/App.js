import React from 'react';
import logo from './logo.svg';
import SneakerContainer from '../src/container/SneakerContainer.js';
import CartContainer from '../src/container/CartContainer';
import Filter from '../src/components/Filter.js'
import NavBar from '../src/components/NavBar.js'
import Form from '../src/components/Form.js';
import { Menu, Breadcrumb, Header, Sticky} from "semantic-ui-react";
import Confirmation from '../src/components/Confirmation.js'
import { NavLink } from 'react-router-dom';
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
  submit: ""
}

handleSubmit(event){
  event.preventDefault()
  this.setState({
    submit: event.target.value
  })
}


componentDidMount() {
  fetch('http://localhost:3000/sneakers')
  .then(res=>res.json())
  .then(allSneakers =>{
    this.setState({
      sneakers: allSneakers
    })
  })
}


handleFilterChange = (event) => {
  this.setState({
    filtered: event.target.value
  })
}

handleFormSubmit = (event, shoeObj) => {
  // debugger;
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

removeClick = (sneakerID) => {
  let sneaker = this.state.sneakers.find(sneaker => sneaker.id === sneakerID)
  let updatedSneakerList = this.state.sneakers.filter(sneaker => sneaker.id !== sneakerID)
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

removeCartClick = (sneakerId) => {
  let filteredSneaker = this.state.clickedSneakers.filter(sneaker => sneaker.id !== sneakerId)
  this.setState({
    clickedSneakers: filteredSneaker,
  })
}

 clickedNavBar = (event) =>{
    if(event.target.id === "checkout"){
          console.log("clicked checkout")
   }
  else if(event.target.id=== "sell"){
    console.log("clicked sell")
  }
  else if(event.target.id === "shop"){
    console.log("clicked shop")
  }

}

//add a div to return method then render based on click

render(){

return (
    <div className="App" >
    <NavBar clickedNavBar={this.clickedNavBar} />
        <Filter filtered={this.state.filtered} handleFilterChange={this.handleFilterChange} />
        <SneakerContainer sneakers={this.state.sneakers} shoppingCartClick={this.shoppingCartClick} filtered={this.state.filtered} removeClick={this.removeClick}/>
        <CartContainer clickedSneakers={this.state.clickedSneakers} removeCartClick={this.removeCartClick} />
        <Form handleFormSubmit={this.handleFormSubmit} updateShoeStore={this.updateShoeStore} allSneakers={this.sneakers}/>
    </div>
    );
  }
}

export default App;
