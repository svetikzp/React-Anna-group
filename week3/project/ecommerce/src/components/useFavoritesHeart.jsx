import { useContext } from 'react'
import { FavoriteContext } from '../context/FavoriteContext'
import regHeart from '../assets/heart-regular.svg'
import solHeart from './../heart-solid.svg'
	
	const useFavoritesHeart = (id) => {
		const productId = id.itemId;
	  
		const { favoriteIdList, setFavoriteIdList } = useContext(FavoriteContext);
	  
		const isFavoriteItem = favoriteIdList.includes(productId);
	  
		const heart = isFavoriteItem ? solHeart : regHeart;

		function favoriteHandler() {
		  if (!isFavoriteItem) {
			setFavoriteIdList([...favoriteIdList, productId]);
		  } else {
			setFavoriteIdList(favoriteIdList.filter((item) => item !== productId));
		  }
		}
	  
		return (
		  <button className="favorites-btn" onClick={favoriteHandler}>
			<img className="heart" src={heart} alt="heart" />
		  </button>
		);
	  }
	  export default useFavoritesHeart

