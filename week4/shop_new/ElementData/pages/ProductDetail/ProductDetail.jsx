import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProduct from '../ProductDetail/ProductDetail';
//import ProductDetail from '../../ProductDetail.css';
import ErrorMessage from '../../components/ErrorMessage';


function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({ isError: false, message: '' })

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const data = await getProduct(id)
                setProduct(data)
            } catch (error) {
                setError({ isError: true, message: error.message })
            } finally {
                setIsLoading(false)
            }
        })()
    }, [id])

    return (
        <>
            {isLoading ?
                <div>Loading....</div> :
                <>
                    {error.isError && <ErrorMessage msg={error.message} />}
                    {product &&
                        <>
                            <div className="title">
                                <h1>{product.title}</h1>
                            </div>
                            <div className="product-detail">
                                <p>{product.description}</p>
                                <div className="product-detail-image">
                                    <img className="product-image" src={product.image} alt={product.title} />
                                </div>
                            </div>
                        </>
                    }
                </>
            }
        </>
    )

}

export default ProductDetail;

