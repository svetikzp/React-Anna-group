import React, { createContext, useState } from 'react'
	
	export const FavoriteContext = createContext();
	
	export function FavoriteContextProvider(props) {
	   const [idFavoriteItems, setIdFavoriteItems] = useState([]);
	
	   return (
	      <FavoriteContext.Provider value={{ idFavoriteItems, setIdFavoriteItems }}>
	         {props.children}
	      </FavoriteContext.Provider>
	   )
	}

