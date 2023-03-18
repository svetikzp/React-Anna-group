//import "./Products.css";
async function getProduct (id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  if (!response.ok) {
      throw new Error (`Error ${response.status} ${response.statusText}`)
  }
  const product = await response.json()
  return product
}
export default getProduct;
