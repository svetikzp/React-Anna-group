import {  Route, Routes} from 'react-router-dom'
import './App.css';
import ProductsPage from './pages/ProductsPage'
import ProductOptionsPage from './pages/ProductOptionsPage'



function App() {

   return (
      <div className="App">
         <Routes>
            <Route path='/' element={<ProductsPage />} />
            <Route path='/product/:itemId' element={<ProductOptionsPage />} />
         </Routes>
      </div>
   );
}

export default App;


