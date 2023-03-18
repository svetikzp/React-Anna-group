import React from 'react'

function ErrorMessage({msg}) {

    return (
        <div>
           <h2 style={{color:"red"}}>{`Error! ${msg}`}</h2>
        </div>
        
    )
}
export default ErrorMessage;
