import React from 'react'
import Categories from '../../components/product/categories'
import Products from '../../components/product/products'



export default function ProductsPage() {
   const [category, setCategory] = React.useState('All items')

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