import React, { useEffect } from "react";
import { getProducts } from "../../redux/actions/product";
import { connect } from "react-redux";

const Products = () => {
    useEffect(() => {
        getProducts();
      }, []);
  return (
    <div>Products</div>
  )
}
const mapStateToProps = (state) => ({
    products: state.products.products
  });

export default connect(mapStateToProps)(Products)