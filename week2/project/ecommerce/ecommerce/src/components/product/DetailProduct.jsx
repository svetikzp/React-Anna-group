import React from 'react'

export default function DetailProduct({ itemInfo }) {
   return (
      <div className='detailItemWrap'>
         <div className='detailItemTitle'>{itemInfo.title}</div>
         <div className='detailItemDescription'>{itemInfo.description}</div>
         <img className='detailItemImage' src={itemInfo.image} alt={itemInfo.title} />
      </div>
   )
}