import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";


function Product({ product }) {
  return (
   <div key={product.id} className="product">
     <Link to={`/product/${product.id}`} >
    
      <li className='product-item'>
         <div className="product">
         <div className='product-image'>{product.image}</div>
         <div className="product-title">{product.title}</div>
         <div className="product-price">{product.price}</div>
       </div>
       </li>
     </Link>
    </div>
  );
}

export default Product;

