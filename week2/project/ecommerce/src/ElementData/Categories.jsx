    import './Categories.css';

    async function getCategoryList () {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const categoryList = await response.json();
        return categoryList
    }
    
    export default getCategoryList;
    