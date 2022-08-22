import React from "react";
import Products from "./components/Products";
import { useEffect, useState } from 'react';
import AddProducts from "./components/AddProducts";

const CakeBake = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
      const getProdList = async() => {
        const response = await fetch('http://localhost:8080/items');
        const products = await response.json();
        setProducts(products);
      } 
      getProdList();
    })
    return (
        <>
            <Products products={products}/>
            <AddProducts/>
        </>
    )
}

export default CakeBake;