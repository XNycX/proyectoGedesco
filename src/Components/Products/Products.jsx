import React, { useEffect } from "react";
import { getProducts } from "../../redux/actions/product";
import { connect } from "react-redux";
import { Card } from 'antd';
import "./Products.css";

const Products = (props) => {
  useEffect(() => {
    getProducts();
  }, []);
  const { Meta } = Card;
  return (
    <div className="productContainer">
      {props.products.map((product) => {
        return (  <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="ProductImage" src={product.image} />}
          >
            <Meta title={product.title} description={product.price+'€'} />
          </Card>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps)(Products);
