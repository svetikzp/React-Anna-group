import Product from './product'
import React, { useState } from 'react'
import ErrorMessage from '../../../components/common/Error/ErrorMessage'
import '../css/product.css'
import Spinner from '../../../components/common/Spinner/Spinner'

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

   // eslint-disable-next-line
   React.useEffect(() => { getProductList() }, [prodCategory])

   return (
      <div>
         {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
         <div className='productList-container'>
            <div className='productList'>
               {isLoading ? <div><Spinner /></div> :
                  productList.map((item) => <Product key={item.id} item={item} />)}
            </div>
         </div >
      </div>
   )
}

export default Products