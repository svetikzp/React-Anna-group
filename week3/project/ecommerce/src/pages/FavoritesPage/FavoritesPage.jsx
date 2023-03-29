import React, { useContext, useEffect, useState } from 'react'
	import ErrorMessage from '../../components/common/Error/ErrorMessage'
	import Nav from '../../components/common/Nav/Nav'
	import Revs from '../../components/common/Revs/Revs'
	import { FavoriteContext } from '../../context/FavoriteContext'
	import useFetch from '../../hooks/useFetch'
	import Product from '../ProductsPage/products/product'
	import './favoritesPage.css'
	
	export default function FavoritesPage() {
	   const { idFavoriteItems } = useContext(FavoriteContext)
	   const { isLoading, errorObj, getFetch } = useFetch()
	   const [favItemData, setFavItemData] = useState([])
	
	   // eslint-disable-next-line
	   useEffect(() => { getFavoriteItemsList() }, [])
	
	   async function getFavoriteItemsList() {
	      for (let index = 0; index < idFavoriteItems.length; index++) {
	         let data = await getFetch(`https://dummyjson.com/products/${idFavoriteItems[index]}`)
	         setFavItemData((prev) => [...prev, data])
	      }
	   }
	
	   return (
	      <div className='favoriteItemsContainer'>
	         <Nav />
	         <div>
	            <h2 className='headTitle'>PRODUCTS FAVORITES</h2>
	            {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
	            <div className='productList-collection'>
	               <div className='productList'>
	                  {isLoading && <div><Revs /></div>}
	                  {favItemData.length > 0
	                     ? favItemData.map((item) => <Product key={item.id} item={item} />)
	                     : <div className='messageEmptyList'>Favorite products not selected...</div>}
	               </div>
	            </div>
	         </div>
	      </div >
	   )
	}


