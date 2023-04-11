import InfoMessage from '../components/Message'

function useCopy() {
   const handleCopy = async (data) => {
      try {
         await navigator.clipboard.writeText(data)
         console.log('It has been copied')
         return <InfoMessage cop={data} />
      }
      catch (error) {
         console.log(error)
      }

   }
   return [handleCopy]
}

export default useCopy