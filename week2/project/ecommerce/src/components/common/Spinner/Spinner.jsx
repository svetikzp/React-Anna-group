import React from 'react'
import './spinner.css'

export default function Spinner() {
   return (
      <div>
         <div className='spinner'></div>
         <p className='loading'>Loading...</p>
      </div>
   )
}
