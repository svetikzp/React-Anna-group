import React from 'react'

export default function ErrorMessage({ errorMsg }) {

    return (
       <div>
          <h2 className='errorMessage'>{`ERROR! ${errorMsg}`}</h2>
       </div>
    )
 }
 