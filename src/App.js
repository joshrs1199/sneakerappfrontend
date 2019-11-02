import React from 'react'
import SneakerContainer from '../src/container/SneakerContainer.js';
import CartContainer from '../src/container/CartContainer';
import Filter from '../src/components/Filter.js'
// import NavBar from '../src/components/NavBar.js'
import Form from '../src/components/Form.js';
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
  filterBy: "",
  checkout: false,
  page: "shop"
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
handleAddInCart = (sneakerId) => {
  console.log(sneakerId)
}

whatPageToRender = () => {
  switch(this.state.page) {
    case "checkout":
    return <CartContainer className="App" status={this.state.page} handleClick={this.handleClick} clickedSneakers={this.state.clickedSneakers} buyNowClick={this.buyNowClick} shoppingCartClick={this.handleAddInCart}/>
    case "shop":
    return <div>
           <Filter filtered={this.state.filtered} handleFilterChange={this.handleFilterChange} />
           <SneakerContainer className="App" status={this.state.page} handleClick={this.handleClick} sneakers={this.state.sneakers} shoppingCartClick={this.shoppingCartClick} filtered={this.state.filtered} buyNowClick={this.buyNowClick}/>
           </div>
   case "sell":
   return <Form className="App" handleFormSubmit={this.handleFormSubmit} updateShoeStore={this.updateShoeStore} allSneakers={this.sneakers}/>

      default:

  }
}

sortByPrice = () => {

let copySneaker = [...this.state.sneakers]

copySneaker.sort((a, b) => (a.price > b.price) ? 1 : -1)


  this.setState({
    sneakers: copySneaker
  })
}

// When the user scrolls the page, execute myFunction


 render(){
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
    </header>
    <button onClick={this.sortByPrice} >Sort By Price</button>

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
//
//
// <header>
//     <div class="header-banner">
//         <h1>Visit Finland</h1>
//     </div>
//     <div class="clear"></div>
//     <nav>
//         <div class="site-title">Finland</div>
//         <ul>
//             <li><a href="/archive">Archive</a></li>
//             <li><a href="/events">Events</a></li>
//             <li><a href="/contact">Contact</a></li>
//         <ul>
//     </nav>
// </header>


// <NavBar class="header" id="myHeader" clickedNavBar={this.clickedNavBar}/>

//
// {
//
//   this.state.checkout ?
//   <CartContainer handleClick={this.handleClick} clickedSneakers={this.state.clickedSneakers} buyNowClick={this.buyNowClick} shoppingCartClick={this.handleAddInCart}/>
//   :
//   <div>
//   <NavBar clickedNavBar={this.clickedNavBar}/>
//   <Filter filtered={this.state.filtered} handleFilterChange={this.handleFilterChange} />
//     <SneakerContainer handleClick={this.handleClick} sneakers={this.state.sneakers} shoppingCartClick={this.shoppingCartClick} filtered={this.state.filtered} buyNowClick={this.buyNowClick}/>
//   <h3>
//     <Form handleFormSubmit={this.handleFormSubmit} updateShoeStore={this.updateShoeStore} allSneakers={this.sneakers}/>
//   </h3>
// </div>
// }
