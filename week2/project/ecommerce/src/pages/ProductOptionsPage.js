import axios from "axios";
import { useEffect, useState, useCallback, } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";

function ProductOptionsPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProductOptions = useCallback(async () => {
   await axios(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data); 
      })
            
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);
  useEffect(() => {
    getProductOptions();
  }, [productId, getProductOptions]);

  if (loading) return "Loading ...";
  if (error) return "Error!";
   console.log(product);
  console.log(productId);
  return (
    <div className="product-card">
      <Products productOptions={product} />
    </div>
  );
}
export default ProductOptionsPage;
