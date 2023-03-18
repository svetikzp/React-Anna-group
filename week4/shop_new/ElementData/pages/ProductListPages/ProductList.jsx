import Categories from '../../ElementData/Categories';
import Products from './../ProductListPages/ProductList';
import getProducts from './ProductElemPages/Products';
import getCategories from '../../ElementData/Categories';
import { useState, useEffect } from 'react';
import ErrorMessage from '../../components/ErrorMessage'

function ProductsList() {
    const [categories, setCategories] = useState([]);
    const [collectionCategory, setCollectionCategory] = useState('');
    const [products, setProducts] = useState([]);
    const [error, setError] = useState({ isError: false, message: '' });
    const [isLoading, setIsLoading] = useState(false);
     
    useEffect(() => {
        (async () => {
            const data = await getCategories();
            setCategories(data);
        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const data = await getProducts(collectionCategory);
                setProducts(data);
            } catch (error) {
                setError({ isError: true, message: error.message })
            } finally {
                setIsLoading(false);
            }
        })()
    }, [collectionCategory])

    return (
        <>
            {error.isError && <ErrorMessage msg={error.message} />}
            <div>
                <h1>Products</h1>
                <Categories
                    categories={categories}
                    state={ collectionCategory }
                    setState={setCollectionCategory}
                    setIsLoading={setIsLoading} />
                <Products products={products} isLoading={isLoading} />
            </div>
        </>
    )
}

export default ProductsList;

