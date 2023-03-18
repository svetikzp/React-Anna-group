import React from 'react';
import { Link } from "react-router-dom";

function ProductPages({ id, image, title, description }) {
  return (
    <li className='product-item'>
      <Link className='product' to={`/product/${id}`}>
      <span className='product-title' title={title}>{title}</span>
      <img className='product-image' src={image} alt={description} />  
      </Link>
    </li >
  )
}

export default ProductPages;
