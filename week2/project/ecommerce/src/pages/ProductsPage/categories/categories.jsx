import React, { useState, useEffect } from 'react'
import ErrorMessage from '../../../components/common/Error/ErrorMessage';
import Category from './category'
import Revs from '../../../components/common/Revs/Revs'
import '../css/product.css'

function Categories({ onClick, activeCategory }) {
   const [CategoriesList, setCategoriesList] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [errorObj, setErrorObj] = useState({ isError: false, message: '' })

   useEffect(() => { getCategoriesList() }, []);

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
      <div className='categories-collection'>
         {errorObj.isError && <ErrorMessage errorMsg={errorObj.message} />}
         <div className='categories'>
            {isLoading ? <div><Revs /></div> :
               CategoriesList.map((category, index) => {
                  return <Category key={index} category={category} onClick={onClick} activeCategory={activeCategory} />
               })}
         </div>
      </div>
   )
}

export default Categories