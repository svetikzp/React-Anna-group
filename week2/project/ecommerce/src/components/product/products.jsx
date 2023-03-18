import Product from './product'
import React from 'react'
import ErrorMessage from '../common/ErrorMessage'
import './css/product.css'
import Spinner from '../common/Spinner/Spinner'

function Products({ prodCategory }) {
   const [productList, setProductList] = React.useState([])
   const [isLoading, setIsLoading] = React.useState(false);
   const [errorObj, setErrorObj] = React.useState({ isError: false, message: '' })


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
         <div className='productList-conteiner'>
            <div className='productList'>
               {isLoading ? <div><Spinner /></div> :
                  productList.map((item) => <Product key={item.id} item={item} />)}
            </div>
         </div >
      </div>
   )
}

export default Products


