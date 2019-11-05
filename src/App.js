import React from 'react'
import SneakerContainer from '../src/container/SneakerContainer.js';
import CartContainer from '../src/container/CartContainer';
import Filter from '../src/components/Filter.js'
import FinalCheckout from '../src/components/FinalCheckout.js'
import {Elements, StripeProvider} from 'react-stripe-elements';

import Form from '../src/components/Form.js';
import './App.css';

class App extends React.Component{

   link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    // backgroundColor: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

state = {
  sneakers: [],
  clickedSneakers: [],
  filtered: "",
  filterBy: "",
  page: "shop",
  total: 0
}

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
  .then(
    this.setState({
      page: "shop"
    })
  )
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

  for(let oneSneaker of this.state.clickedSneakers) {
    if(sneaker === oneSneaker) {
      alert('Already Bought')
    }
  }
  if(this.state.clickedSneakers.includes(sneaker)) {
    return;
  } else {
    this.setState({
      clickedSneakers: [...this.state.clickedSneakers, sneaker]
    })
  }
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


clickedNavBar = (event) => {

  if(event.target.name === "shop") {
    this.setState({
      page: "shop"
    })
  }
  if(event.target.name === "sell") {
    this.setState({
      page: "sell"
    })
  }
  if(event.target.name === "checkout") {
    this.setState({
      page: "checkout"
    })
  }
}

handleCheckoutPage = (price) => {
  if (this.state.clickedSneakers.length === 0 ) {
    alert('Nothing In Cart!')
  }
  else {
    this.setState({
      total:price,
      page: "finalCheckout"
    })
  }
}

backHome = () => {
  this.setState({
    page: "shop",
    clickedSneakers: []
  })
}

whatPageToRender = () => {
  switch(this.state.page) {
    case "checkout":
    return <CartContainer renderCheckout={this.handleCheckoutPage}className="App" status={this.state.page} handleClick={this.handleClick} clickedSneakers={this.state.clickedSneakers} buyNowClick={this.buyNowClick} shoppingCartClick={this.handleAddInCart}/>
    case "shop":
    return <div>
           <Filter filtered={this.state.filtered} handleFilterChange={this.handleFilterChange} />
           <SneakerContainer className="App" status={this.state.page} handleClick={this.handleClick} sneakers={this.state.sneakers} shoppingCartClick={this.shoppingCartClick} filtered={this.state.filtered} buyNowClick={this.buyNowClick}/>
           </div>
   case "sell":
   return <Form className="App" handleFormSubmit={this.handleFormSubmit} updateShoeStore={this.updateShoeStore} allSneakers={this.sneakers}/>
   case "finalCheckout":
   return       <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
          <h1>Enter Payment And Shipping Details</h1>
          <Elements>
            <FinalCheckout total={this.state.total} backHome={this.backHome} />
          </Elements>
        </div>
      </StripeProvider>
      default:

  }
}


sortCheap = () => {
let copySneaker = [...this.state.sneakers]
copySneaker.sort((a, b) => (a.price > b.price) ? 1 : -1)
  this.setState({
    sneakers: copySneaker
  })
}


sortExp = () => {
let copySneaker = [...this.state.sneakers]
copySneaker.sort((a, b) => (a.price < b.price) ? 1 : -1)
  this.setState({
    sneakers: copySneaker
  })
}
// When the user scrolls the page, execute myFunction


 render(){
   console.log(this.state.total)
 return (

   <div className="App" style={{}} >
     <header>
       <div className="header-banner">
           <h1>Dope Kicks</h1>
       </div>
         <div className="clear"></div>
           <nav>
             <div className="site-title">Sneakers</div>

           <ul>
             <li><a href="#shop" name="shop" onClick={(event) => this.clickedNavBar(event)} >Shop</a></li>
           <li><a href="#sell" name="sell" onClick={(event) => this.clickedNavBar(event)}>Sell</a></li>
         <li><a href="#checkout" name="checkout" onClick={(event) => this.clickedNavBar(event)}>Checkout</a></li>

           </ul>
        </nav>
    </header><br/>
  <button style={{"backgroundColor": "#a9abae" }} onClick={this.sortCheap} >Sort Cheapest to Highest</button>
    <button style={{"backgroundColor": "#a9abae" }} onClick={this.sortExp} >Sort Highest to Cheapest</button>


    <section className="content">
         {
            this.whatPageToRender()
         }
       </section>
 </div>
     );
   }
 }

export default App;
