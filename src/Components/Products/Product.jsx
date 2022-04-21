import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./Product.css";
import { getProducts, getCategories } from "../../redux/actions/product";
import { Table } from "antd";
import "antd/dist/antd.css";

const Product = (props) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
          sorter: (a, b) => {
            a = a.title.toLowerCase();
            b = b.title.toLowerCase();
            if (a == b) {
              return 0;
            }
            if (a < b) {
              return -1;
            }
            return 1;
      },
      width: "30%",
    },
    {
      title: "Price",
      dataIndex: "price",
        sorter: (prev, curr) => {
          return prev.price - curr.price
      },
    },
    {
      title: "Categories",
      dataIndex: "category",
      filters: [
        {
          text: <span>{props.categories[0]}</span>,
          value: props.categories[0],
        },
        {
          text: <span>{props.categories[1]}</span>,
          value: props.categories[1],
        },
        {
          text: <span>{props.categories[2]}</span>,
          value: props.categories[2],
        },
        {
          text: <span>{props.categories[3]}</span>,
          value: props.categories[3],
        },
      ],
      onFilter: (value, record) => record.category.startsWith(value),
      width: "40%",
    },
  ];

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div>
      <Table columns={columns} dataSource={props.products} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  categories: state.products.categories,
});

export default connect(mapStateToProps)(Product);
