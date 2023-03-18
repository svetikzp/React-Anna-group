import { Route, Routes} from 'react-router-dom'
import './App.css';
import ProductsList from './pages/ProductListPages/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import NotFoundPage from './pages/NotFoundPage';


function App() {
   return (
      <div className="App">
         <Routes>
            <Route path='/' element={<ProductsList />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='*' element={<NotFoundPage />} />
         </Routes>
      </div>
   );
}

export default App;


