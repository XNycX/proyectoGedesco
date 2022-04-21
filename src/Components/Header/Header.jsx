import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <div className='header-container'>
        <img src="https://www.gedesco.es/contenido/uploads/komodo/logotipo.png" alt="" />
          <div>
              <Link to="/">Table of products</Link>
              <Link to="/products">Products</Link>
        </div>          
    </div>
  )
}

export default Header