import './App.css';
import { Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import SingleProductPage from './pages/SingleProductPage/SingleProductPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';



function App() {

   return (
      <div className="App">
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/products/product/:itemId' element={<SingleProductPage />} />
            <Route path='*' element={<NotFoundPage />} />
         </Routes>
      </div>
   );
}
export default App;