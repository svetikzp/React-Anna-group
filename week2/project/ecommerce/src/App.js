import './App.css';
import { Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import DetailProductPage from './pages/DetailProductPage/DetailProductPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { Navigate } from 'react-router-dom';

function App() {

   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/product/:itemId' element={<DetailProductPage />} />
            <Route path='*' element={<NotFoundPage />} />
         </Routes>
      </div>
   );
}
export default App;