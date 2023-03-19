import React from 'react'

export default function SingleProduct({ itemInfo }) {
   return (
      <div className='singleItemWrap'>
         <div className='singleItemTitle'>{itemInfo.title}</div>
         <div className='singleItemDescription'>{itemInfo.description}</div>
         <img className='singleItemImage' src={itemInfo.image} alt={itemInfo.title} />
      </div>
   )
}