import React from 'react'
import { useParams } from 'react-router-dom'
import DetailProduct from '../../components/product/DetailProduct'
import './detailProductPage.css'
import ErrorMessage from '../../components/common/ErrorMessage';
import Spinner from '../../components/common/Spinner/Spinner';

export default function ProductDetail() {
   const { itemId } = useParams();
   const [errorObj, setErrorObj] = React.useState({ isError: false, message: '' })
   const [itemInfo, setItemInfo] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(false);

   const getItemInfo = React.useCallback(async () => {
      try {
         setIsLoading(true);
         const promise = await fetch(`https://fakestoreapi.com/products/${itemId}`);
         const item = await promise.json();
         setItemInfo(item);
      }
      catch (error) {
         setErrorObj({ isError: true, message: error.message })
      }
  
      setTimeout(() => {
         setIsLoading(false);
       }, 1000)
      
   }, [itemId])

   React.useEffect(() => { getItemInfo() }, [itemId, getItemInfo])

   return (
      <div className='detailItemContainer'>
         {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
         {isLoading ? <Spinner /> : <DetailProduct itemInfo={itemInfo} />}
      </div>
   )
}