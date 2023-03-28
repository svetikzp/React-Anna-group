import React, { useState } from 'react'
import Categories from './categories/categories'
import Products from './products/products'
import Nav from '../../components/common/Nav/Nav'

export default function ProductsPage() {
   const [category, setCategory] = useState('All items')

   const handlerCategoryClick = (event) => {
      event === category ? setCategory('All items') : setCategory(event);
   }

   return (
      <div>
         <Nav />
         <h2 className='headTitle'>PRODUCTS</h2>
         <Categories onClick={handlerCategoryClick} activeCategory={category} />
         <Products prodCategory={category} />
      </div>
   )
}

