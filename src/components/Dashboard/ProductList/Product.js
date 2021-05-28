import React from "react";
import Card from "../../Card/Card";
import "./Product.css";

const Product = (props) => {
  return (
    <Card className="product">
      <div className="product_description">
        <h2 className="product_title">{props.title}</h2>
        <div className="product_price">${props.price}</div>
      </div>
    </Card>
  );
};

export default Product;
