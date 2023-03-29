import { useContext, useEffect, useState } from 'react'
import { FavoriteContext } from '../context/FavoriteContext'
import svgReg from '../../src/assets/heart-regular.svg/heart-regular.svg'
import svgSol from '../../src/assets/heart-solid.svg/heart-solid.svg'

export default function useFavoritesHeart(itemId) {
	
	const { idFavoriteItems, setIdFavoriteItems } = useContext(FavoriteContext)
	const [svgIcon, setSvgItem] = useState(() => idFavoriteItems.includes(itemId) ? svgSol : svgReg)
 
	// eslint-disable-next-line
	useEffect(() => { idFavoriteItems.includes(itemId) ? setSvgItem(svgSol) : setSvgItem(svgReg) }, [itemId])
 
 
	function favoriteIdHandler(itemId) {
	   if (!idFavoriteItems.includes(itemId)) {
		  setIdFavoriteItems((prev) => [...prev, itemId])
		  setSvgItem(svgSol)
	   }
	   else {
		  setIdFavoriteItems((prev) => prev.filter(id => id !== itemId))
		  setSvgItem(svgReg)
	   }
	}
 
	return {
	   svgIcon,
	   favoriteIdHandler,
	   idFavoriteItems
	}
 }

