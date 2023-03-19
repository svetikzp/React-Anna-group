import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import DetailProductPage from '../../pages/DetailProductPage/DetailProductPage';
import '../../pages/DetailProductPage/detailProductPage.css';
import ErrorMessage from '../../components/overallElem/error/ErrorMessage';
import Revs from '../../components/overallElem/Revs/Revs';

export default function ProductDetail() {
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
      <div className='detailItemContainer'>
         {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
         {isLoading && <Revs />}
         {itemInfo && <DetailProductPage itemInfo={itemInfo} />}
      </div>
   )
}
