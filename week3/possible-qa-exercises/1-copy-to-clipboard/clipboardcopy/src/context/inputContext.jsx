import React, { createContext, useState } from 'react'


export const InputContext = createContext();

export function InputContextProvider(props) {
   const [inputData, setInputData] = useState('')
   return (
      <InputContext.Provider value={{ inputData, setInputData }}>
         {props.children}
      </InputContext.Provider>
   )
}