import React from 'react'
import useFavoritesHeart from '../../../hooks/useFavoritesHeart'

export default function DetailProduct({ itemInfo }) {
   const { svgIcon, favoriteIdHandler } = useFavoritesHeart(itemInfo.id)

   return (
      <div className='detailItemWrap'>
         <div className='detailItemTitle'>{itemInfo.title}</div>
         <div className='detailItemDescription'>{itemInfo.description}</div>
         <div className='detailItemImgWrap'>
            {itemInfo.images && <img className='detailItemImage' src={itemInfo.images[0]} alt={itemInfo.title} />}
            <img className='detailItemHeart' src={svgIcon} alt='' onClick={() => { favoriteIdHandler(itemInfo.id) }} />
         </div>
      </div>
   )
}

