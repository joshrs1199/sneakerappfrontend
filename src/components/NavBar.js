import { Menu } from "semantic-ui-react";

import React from 'react';



const NavBar = (props)=> {


    return (
      <Menu class="header" id="myHeader" fluid widths={3}>
        <Menu.Item id="shop" onClick={(event) => props.clickedNavBar(event)} name='Shop' />
        <Menu.Item id="sell" onClick={(event) => props.clickedNavBar(event)} name='Sell'  />
        <Menu.Item id="checkout" onClick={(event) => props.clickedNavBar(event)} name='Checkout' />
      </Menu>
    )
  }
  export default NavBar;
