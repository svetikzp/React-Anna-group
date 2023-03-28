import Product from './product'
import { useEffect } from 'react'
import ErrorMessage from '../../../components/common/Error/ErrorMessage';
import '../css/product.css';
import Revs from '../../../components/common/Revs/Revs'
import useFetch from '../../../hooks/useFetch'

function Products({ prodCategory }) {
	
   const { data, isLoading, errorObj, getFetch } = useFetch()
   const url = (prodCategory !== 'All items')
      ? `https://dummyjson.com/products/category/${prodCategory}`
      : 'https://dummyjson.com/products'

   // eslint-disable-next-line
   useEffect(() => { getFetch(url) }, [prodCategory])

   const productList = data.products

   return (
      <div>
         {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
         <div className='productList-collection'>
            <div className='productList'>
               {isLoading && <div><Revs /></div>}
               {productList && productList.map((item) => <Product key={item.id} item={item} />)}
            </div>
         </div >
      </div>
   )
}

export default Products

