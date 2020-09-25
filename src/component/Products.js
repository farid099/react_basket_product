import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class Products extends Component {
  render() {
    return (
      <div>
        <h3>Products</h3>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.filteredProducts.map((product,index) => (
              <tr key={product.id}>
                <th scope="row">{index+1}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td><Button color="primary" onClick={()=>this.props.addBasket(product)}>Add</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
