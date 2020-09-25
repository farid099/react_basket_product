import React, { Component } from "react";
import Products from "./Products";
import { Container, Row, Col } from "reactstrap";
import NavComponent from "./NavComponent";
import Categories from "./Categories";
import alertify from 'alertifyjs';

export default class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      currentCategory:"",
      basket:[],
    };
  }

  getProducts = () => {
    let url = "http://localhost:3003/products";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => this.setState({ products: data }));
  };

  getCategories = () => {
    let url = "http://localhost:3003/categories";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => this.setState({ categories: data }));
    console.log(this.state.categories);
  };

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  filterCategories = (id) =>{
      let url = "http://localhost:3003/products";
      if(id){
          url+= "?categoryId="+id
      }
      let chosenCategory = this.state.categories.find(c=>c.id === id);
      console.log(url);
      fetch(url)
      .then((resp) => resp.json())
      .then((data) => this.setState({ products: data,currentCategory:chosenCategory }));
      console.log(this.state.products);

      
  }

  addBasket =(product,quantity) =>{
    let basketProducts = [...this.state.basket];
    var addedProduct = basketProducts.find(p=>p.product.id === product.id);
    if(addedProduct){
      addedProduct.quantity++;
      alertify.success("The amount of product successfully increased ");

    }else{
      basketProducts.push({product,quantity:1});
      alertify.success("New product successfully added");

    }
    this.setState({
      basket:basketProducts,
    })
    console.log(basketProducts)

  }


  removeProduct = (product) => {
    let basketProducts = [...this.state.basket];
    let removedProduct = basketProducts.find(p=>p.product.id === product.id);
    let newBasket=[...basketProducts];
    if(removedProduct.quantity>1){
      removedProduct.quantity--;
      alertify.success("The amount of product successfully decreased ");
    }
    else{
     newBasket = basketProducts.filter(p => p.product.id !== product.id);
     alertify.success("The product successfully removed ");

    }
    this.setState({
      basket:newBasket,
    })

    console.log(this.state.basket)

  }

  render() {
    return (
      <div>
        <Container>
          <NavComponent basket={this.state.basket} removeProduct={this.removeProduct}></NavComponent>
          <Row>
            <Col xs="2">
              <Categories currentCategory={this.state.currentCategory} categories={this.state.categories} filterCategory={this.filterCategories}></Categories>
            </Col>
            <Col xs="10">
              <Products filteredProducts={this.state.products}  addBasket={this.addBasket}></Products>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
