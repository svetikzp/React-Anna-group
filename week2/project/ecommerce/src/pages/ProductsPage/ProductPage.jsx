import React, { useState } from 'react'
import Categories from './categories/categories'
import Products from './products/products'



export default function ProductsPage() {
   const [category, setCategory] = useState('All items')

   const handlerCategoryClick = (event) => {
      setCategory(event);
   }

   return (
      <div>
         <h2 className='headTitle'>PRODUCTS</h2>
         <Categories onClick={handlerCategoryClick} activeCategory={category} />
         <Products prodCategory={category} />
      </div>
   )
}
