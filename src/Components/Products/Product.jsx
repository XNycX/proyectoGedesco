import React, { useEffect } from "react";
import { connect } from 'react-redux';
import "./Product.css";
import { getProducts } from "../../redux/actions/product";

const Product = (props) => {
    useEffect(() => {
        getProducts();
    }, [])

  return (
      <div>Products{console.log(props.products) }</div>
  )
}

const mapStateToProps = (state) => ({
    products: state.products.products
});

export default  connect(mapStateToProps)(Product)