import { Menu, Breadcrumb, Header, Sticky} from "semantic-ui-react";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React from 'react';



const NavBar = (props)=> {


    return (
    <Router>
      <Menu fluid widths={3}>
        <Menu.Item id="shop" onClick={props.clickedNavBar} name='Shop' />
        <Menu.Item id="sell" onClick={props.clickedNavBar} name='Sell'  />
        <Menu.Item id="checkout" onClick={props.clickedNavBar} name='Checkout' />
      </Menu>
    </Router>
    )
  }
  export default NavBar;











// import React from 'react';
// import { NavLink } from 'react-router-dom';
//
// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }
//
// const NavBar = () => {
//   return (
//     <div>
//       <NavLink to="/sneakers" exact style={link} activeStyle={{background: 'darkblue'}}>Sell</NavLink>
//       <NavLink to="/cart" exact style={link} activeStyle={{background: 'darkblue'}}>Shopping Cart</NavLink>
//       <NavLink to="/checkout" exact style={link} activeStyle={{background: 'darkblue'}}>Checkout</NavLink>
//       <NavLink to="/browse" exact style={link} activeStyle={{background: 'darkblue'}}>Browse</NavLink>
//     </div>
//   );
// };
//
// export default NavBar;
//
// <Router>
//   <div className="App" >
//     <NavBar />
//       <Route exact path="/search" component={Filter} filtered={this.state.filtered} handleFilterChange={this.handleFilterChange} />
//       <Route exact path="/sneakers" component={SneakerContainer} sneakers={this.state.sneakers} shoppingCartClick={this.shoppingCartClick} filtered={this.state.filtered}/>
//       <Route exact path="/cart" component={CartContainer} clickedSneakers={this.state.clickedSneakers} removeCartClick={this.removeCartClick} />
//       <Route exact path="/sell" component={Form} handleFormSubmit={this.handleFormSubmit} updateShoeStore={this.updateShoeStore} allSneakers={this.sneakers}/>
//   </div>
// </Router>
