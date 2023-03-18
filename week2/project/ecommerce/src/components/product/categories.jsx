import React from 'react'
import ErrorMessage from '../common/ErrorMessage';
import Category from './category'
import Spinner from '../common/Spinner/Spinner'
import './css/product.css'

function Categories({ onClick, activeCategory }) {
   const [CategoriesList, setCategoriesList] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(false);
   const [errorObj, setErrorObj] = React.useState({ isError: false, message: '' })

   React.useEffect(() => { getCategoriesList() }, []);

   async function getCategoriesList() {
      try {
         setIsLoading(true);
         const response = await fetch('https://fakestoreapi.com/products/categories');
         const categories = await response.json();
         setCategoriesList(categories);
      }
      catch (error) {
         setErrorObj({ isError: true, message: error.message })
      }
      finally {
         setIsLoading(false);
      }
   }

   return (
      <div className='categories-container'>
         {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
         <div className='categories'>
            {isLoading ? <div><Spinner /></div> :
               CategoriesList.map((category, index) => {
                  return <Category key={index} category={category} onClick={onClick} activeCategory={activeCategory} />
               })}
         </div>
      </div>
   )
}

export default Categories