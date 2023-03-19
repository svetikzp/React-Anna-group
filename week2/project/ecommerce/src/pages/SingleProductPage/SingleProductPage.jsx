import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import SingleProduct from './singleProduct/SingleProduct'
import './css/singleProductPage.css'
import ErrorMessage from '../../components/common/Error/ErrorMessage';
import Spinner from '../../components/common/Spinner/Spinner';

export default function ProductDatail() {
   const { itemId } = useParams();
   const [errorObj, setErrorObj] = useState({ isError: false, message: '' })
   const [itemInfo, setItemInfo] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   const getItemInfo = useCallback(async () => {
      try {
         setIsLoading(true);
         const promise = await fetch(`https://fakestoreapi.com/products/${itemId}`);
         const item = await promise.json();
         setItemInfo(item);
      }
      catch (error) {
         setErrorObj({ isError: true, message: error.message })
      }
      finally {
         setIsLoading(false);
      }
   }, [itemId])

   useEffect(() => { getItemInfo() }, [itemId, getItemInfo])

   return (
      <div className='singleItemContainer'>
         {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
         {isLoading && <Spinner />}
         {itemInfo && <SingleProduct itemInfo={itemInfo} />}
      </div>
   )
}