//import './Products.css';
import Product from './Product'

function Products({ products, isLoading }) {
  return (
    <>
      {isLoading ?
        <h3>Loading....</h3> :
        <ul className='product-list'>
          {products && products.map(product =>
                <Product 
                  key={product.id}  
                  id={product.id}
                  image={product.image} 
                  title={product.title} 
                  description={product.description} />
            )
          }
        </ul>
      }
    </>
  )
}

export default Products;
