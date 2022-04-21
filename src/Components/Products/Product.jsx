import React, { useEffect } from "react";
import "./Product.css";
import { getProducts } from "../../redux/actions/product";

const Product = () => {
    useEffect(() => {
        getProducts();
    }, [])

  return (
    <div>Product</div>
  )
}

export default (Product)