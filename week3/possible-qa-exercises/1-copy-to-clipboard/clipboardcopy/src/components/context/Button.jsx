import { useContext } from 'react'
import { InputContext } from '../context/inputContext'
import useCopy from '../hooks/useCopy'

function Button() {
   const { inputData } = useContext(InputContext)
   const [clickFnc] = useCopy()

   return (
      <div>
         <button className='button' onClick={() => { clickFnc(inputData) }}>Click me</button>
      </div>
   )
}

export default Button