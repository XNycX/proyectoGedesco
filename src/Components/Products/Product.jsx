import React, { useEffect } from "react";
import { connect } from 'react-redux';
import "./Product.css";
import { getProducts } from "../../redux/actions/products";

const Product = (props) => {
    useEffect(() => {
        getProducts();
    }, []);

  return (
    <div>Product</div>
  )
}

const mapStateToProps = (state) => ({
    products: state.products
});

export default connect(mapStateToProps)(Product)