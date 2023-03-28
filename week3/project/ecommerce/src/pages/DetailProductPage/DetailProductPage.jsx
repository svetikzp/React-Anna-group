import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DetailProduct from './detailProduct/DetailProduct'
import './css/detailProductPage.css'
import ErrorMessage from '../../components/common/Error/ErrorMessage';
import Revs from '../../components/common/Revs/Revs';
import useFetch from '../../hooks/useFetch';
import Nav from '../../components/common/Nav/Nav';

export default function ProductDetail() {
   const { itemId } = useParams();
   const { data, isLoading, errorObj, getFetch } = useFetch()

   // eslint-disable-next-line
   useEffect(() => { getFetch(`https://dummyjson.com/products/${itemId}`) }, [itemId])

   const itemInfo = data;

   return (
      <div>
         <div className='detailItemContainer'>
            <Nav />
            {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
            {isLoading && <Revs />}
            {itemInfo && <DetailProduct itemInfo={itemInfo} />}
         </div>
      </div>
   )
}

