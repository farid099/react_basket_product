import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
   Badge,
} from "reactstrap";

export default function Basket(props) {
  return (
    <div>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Basket <Badge color="warning">{props.basket.length}</Badge> 
        </DropdownToggle>
          <DropdownMenu right>
            {props.basket.map(addedProducts=>(
            <DropdownItem key={addedProducts.product.id}>
              <Badge onClick={()=>props.removeProduct(addedProducts.product)}  style={{marginRight:"10px"}} color="danger">x</Badge>
              {addedProducts.product.productName} 
                  <Badge style={{marginLeft:"10px"}} color="warning">{addedProducts.quantity}</Badge>
            </DropdownItem>
            ))}
          </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}
