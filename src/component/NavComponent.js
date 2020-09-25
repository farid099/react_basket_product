import React from 'react'
import {
    Navbar,
    Nav
  } from 'reactstrap';
import Basket from './Basket';

export default function NavComponents(props) {
    return (
        <div>
            <div>
      <Navbar style={{placeContent: "flex-end"}} color="light" light expand="md">
          <Nav navbar>
            <Basket basket={props.basket} removeProduct={props.removeProduct}></Basket>
          </Nav>
      </Navbar>
    </div>
        </div>
    )

}
