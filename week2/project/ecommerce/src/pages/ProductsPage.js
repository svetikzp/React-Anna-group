import React from 'react'
import Categories from '../components/Categories'
import Products from '../components/Products'


export default function ProductsPage() {
   const [category, setCategory] = React.useState('All items')
   const collectionCategory = (event) => {
      setCategory(event);
   }

   return (
      <div>
         <h2 className='headlineTitle'>PRODUCTS</h2>
         <Categories onClick={collectionCategory} activeCategory={category} />
         <Products prodCategory={category} />
      </div>
   )
}

