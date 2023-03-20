import Product from './product'
import React, { useState, useEffect } from 'react'
import ErrorMessage from '../../../components/common/Error/ErrorMessage';
import '../css/product.css';
import Revs from '../../../components/common/Revs/Revs'

function Products({ prodCategory }) {
   const [productList, setProductList] = useState([])
   const [isLoading, setIsLoading] = useState(false);
   const [errorObj, setErrorObj] = useState({ isError: false, message: '' })


   async function getProductList() {
      try {
         setIsLoading(true);
         const response = (prodCategory !== 'All items')
            ? await fetch(`https://fakestoreapi.com/products/category/${prodCategory}`)
            : await fetch('https://fakestoreapi.com/products')
         const items = await response.json();
         setProductList(items);
      }
      catch (error) {
         setErrorObj({ isError: true, message: error.message })
      }
      finally {
         setIsLoading(false);
      }
   }

   useEffect(() => { getProductList()} , [prodCategory] )

   return (
      <div>
         {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
         <div className='productList-collection'>
            <div className='productList'>
               {isLoading ? <div><Revs /></div> :
                  productList.map((item) => <Product key={item.id} item={item} />)}
            </div>
         </div >
      </div>
   )
}

export default Products
