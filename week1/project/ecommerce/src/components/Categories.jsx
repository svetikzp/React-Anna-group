    import './Categories.css';
    import Category from './Category'

function Categories ({categories, state, setState}) {
    
    function changeFilter(newCategory) {
        setState(prevState => {
            return {
                collectionCategory: newCategory, 
                itsEver: (prevState.collectionCategory === newCategory) && !prevState.itsEver
            }
        })
    }
    
    return (
        <div className="categories">
            {categories.map((item, index) => {
                const className = ((item === state.collectionCategory) && !state.itsEver ? 'category-collection' : '')
                return <Category key={index} className={className} data={item} onClick={changeFilter} />
            })}
        </div>
    )
}

export default Categories;