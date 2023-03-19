import React from 'react'
import { Link } from 'react-router-dom';
import './homePage.css';

export default function HomePage() {
   return (
      <div className='homePageContainer'>
         <div className='homePage'>
            <Link to='/products'><button className='btnStart'>START</button></Link>
         </div>
      </div>
   )
}
