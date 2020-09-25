import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default function Categories(props) {
  return (
    <div>
              <h3>Categories</h3>
      <ListGroup>
        {props.categories.map((category) => (
          <ListGroupItem key={category.id}
          active={category.id === props.currentCategory.id}
          onClick={()=>props.filterCategory(category.id)}>
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
