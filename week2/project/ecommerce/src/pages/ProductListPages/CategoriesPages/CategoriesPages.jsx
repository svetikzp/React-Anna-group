import React from 'react';
import '../../components/Categories.css';
//import Category from '../components/Category'

function CategoriesPages ({categories, state, setState, setIsLoading}) {
    
    function changeFilter(newCategory) {
        setState(prevState =>  prevState === newCategory ? '' : newCategory );
    }
    
    return (
        <div className="categories">
            {categories.map((item, index) => {
                const className = ((item === state) ? 'category-collection' : '')
                return <CategoriesPages key={index} className={className} data={item} onClick={changeFilter} />
            })}
        </div>
    )
}

export default CategoriesPages;
