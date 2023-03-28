import { useContext } from 'react'
import { FavoriteContext } from '../context/FavoriteContext'
import regHeart from '../../heart-regular.svg'
import solHeart from '../../../assets/heart-solid.svg'
	
	/*export default function useFavoritesHeard(itemId) {
	
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
	}*/
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
	  };
	  export default useFavoritesHeart

