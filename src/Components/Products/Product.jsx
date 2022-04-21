import React, { useEffect } from "react";
import { connect } from 'react-redux';
import "./Product.css";
import { getProducts } from "../../redux/actions/product";
import { Table } from 'antd';
import "antd/dist/antd.css";


const Product = (props) => {
    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          width: '30%',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          sorter: (a, b) => a.price - b.price,
        },
        {
          title: 'Categories',
          dataIndex: 'category',
          width: '40%',
        },
    ];
    
    useEffect(() => {
        getProducts();
    }, [])
    
  return (
      <div>
          <Table columns={columns} dataSource={props.products} />
      </div>
  )
}

const mapStateToProps = (state) => ({
    products: state.products.products
});

export default  connect(mapStateToProps)(Product)