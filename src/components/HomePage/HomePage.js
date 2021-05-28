import React from "react";
import Cards from "../Card/Card";
import ProductList from "../Dashboard/ProductList/ProductList";

import "./HomePage.css";

const HomePage = () => {
  const DUMMY_PRODUCTS = [
    {
      id: "e1",
      title: "Toilet Paper",
      price: 94.12,
    },
    {
      id: "e2",
      title: "New TV",
      price: 799.49,
    },
    {
      id: "e3",
      title: "Car Insurance",
      price: 294.67,
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      price: 450,
    },
    {
      id: "e5",
      title: "Puma Shoes",
      price: 1450,
    },
    {
      id: "e6",
      title: "Nike Shoes",
      price: 2450,
    },
  ];

  return (
    <li>
      <Cards className="Products">
        <ProductList items={DUMMY_PRODUCTS} />
      </Cards>
    </li>
  );
};

export default HomePage;
