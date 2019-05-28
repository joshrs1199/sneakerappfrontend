import React from 'react';
import logo from './logo.svg';
import SneakerContainer from '../src/container/SneakerContainer.js';
import CartContainer from '../src/container/CartContainer';
import { Menu } from 'semantic-ui-react'
import Filter from '../src/components/Filter.js'
import NavBar from '../src/components/NavBar.js'
import Form from '../src/components/Form.js';
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


handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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

render(){


return (
    <div className="App" >
        <Filter filtered={this.state.filtered} handleFilterChange={this.handleFilterChange} />
        <SneakerContainer sneakers={this.state.sneakers} shoppingCartClick={this.shoppingCartClick} filtered={this.state.filtered}/>
        <CartContainer clickedSneakers={this.state.clickedSneakers} removeCartClick={this.removeCartClick} />
        <Form handleFormSubmit={this.handleFormSubmit} updateShoeStore={this.updateShoeStore} allSneakers={this.sneakers}/>
    </div>
    );
  }
}

export default App;
