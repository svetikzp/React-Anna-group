import './App.css';
import { Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import DetailProductPage from './pages/DetailProductPage/DetailProductPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {

   return (
      <div className="App">
         <Routes>
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/products/product/:itemId' element={<DetailProductPage />} />
            <Route path='*' element={<NotFoundPage />} />
         </Routes>
      </div>
   );
}
export default App;