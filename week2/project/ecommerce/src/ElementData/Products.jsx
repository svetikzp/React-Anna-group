  import './Products.css';

  async function getProducts (category) {
    const url = `https://fakestoreapi.com/products${category?'/category/':''}${category}`
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error (`Error ${response.status} ${response.statusText}`)
    }
    const products = await response.json()
    return products
}
export default getProducts;
