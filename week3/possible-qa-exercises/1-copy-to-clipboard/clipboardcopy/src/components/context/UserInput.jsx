import React, { useContext } from 'react'
import { InputContext } from '../context/inputContext'

function UserInput() {
   const { inputData, setInputData } = useContext(InputContext)

   const updateData = (event) => {
      setInputData(event.target.value)
   }
   // console.log(inputData);

   return (
      <div>
         <label className='inputUserLabel'>Input text here
            <input
               type='text'
               name='userText'
               className='inputUser'
               onChange={updateData}
               value={inputData} />
         </label>
      </div>
   )
}

export default UserInput