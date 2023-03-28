import { useState } from 'react'
	
	export default function useFetch() {
	   const [data, setData] = useState([])
	   const [isLoading, setIsLoading] = useState(false)
	   const [errorObj, setErrorObj] = useState({ isError: false, message: '' })
	
	   async function getFetch(url) {
	      try {
	         setIsLoading(true)
	         setErrorObj({ isError: false, message: '' })
	         const response = await fetch(url)
	         if (!response.ok) throw new Error(`Error ${response.status} ${response.message}`)
	         const data = await response.json()
	         setData(data)
	         return data
	      }
	      catch (error) {
	         setErrorObj({ isError: true, message: error.message })
	      }
	      finally {
	         setIsLoading(false)
	      }
	   }
	
	   return {
	      data, isLoading, errorObj, getFetch
	   }
	}

