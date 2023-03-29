import { Link } from 'react-router-dom'
import useFavoritesHeart from '../../../hooks/useFavoritesHeart'
	
export default function Product({ item }) {

   const { svgIcon, favoriteIdHandler } = useFavoritesHeart(item.id)

   return (
      <div className='itemBlockWrap'>
         <div className='itemBlock'>
            <Link to={`/products/product/${item.id}`}>
               <img className='itemImage' src={item.images[0]} alt={item.title} />
               <div className='itemTitle' >{item.title}</div>
            </Link>
            <img className='itemHeart' src={svgIcon} alt='' onClick={() => { favoriteIdHandler(item.id) }} />
         </div>
      </div >

   )
}

