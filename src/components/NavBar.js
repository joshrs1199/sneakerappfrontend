import { Menu } from "semantic-ui-react";
import {BrowserRouter as Router,  } from 'react-router-dom';

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
