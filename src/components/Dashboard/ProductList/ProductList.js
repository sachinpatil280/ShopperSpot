import React from "react";
import Card from "../../Card/Card";
import Product from "./Product";

import "./ProductList.css";

const ProductList = (props) => {
  return (
    <Card className="product-list">
      {props.items.map((product) => (
        <Product key={product.id} title={product.title} price={product.price} />
      ))}
    </Card>
  );
};

export default ProductList;
