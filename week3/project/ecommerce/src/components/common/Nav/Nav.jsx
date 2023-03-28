import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

export default function Nav() {
   return (
      <div className='nav'>
         <nav >
            <Link to='/'>
               <button className='navBtn'>HOME</button>
            </Link>
            <Link to='/products'>
               <button className='navBtn'>PRODUCTS</button>
            </Link>
            <Link to='/products/favorite'>
               <button className='navBtn'>FAVORITES PRODUCTS</button>
            </Link>
         </nav>
      </div>
   )
}
