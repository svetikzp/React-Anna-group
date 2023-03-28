import './App.css';
import { Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import DetailProductPage from './pages/DetailProductPage/DetailProductPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { FavoriteContextProvider } from './context/FavoriteContext'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import HomePage from './pages/HomePage/HomePage'

function App() {
	
   return (
      <div className="App">
         <Routes>
            <Route path='/' element={
               <FavoriteContextProvider>
                  <HomePage />
               </FavoriteContextProvider>
            } />
            <Route path='/products' element={
               <FavoriteContextProvider>
                  <ProductsPage />
               </FavoriteContextProvider>
            } />
            <Route path='/products/product/:itemId' element={
               <FavoriteContextProvider>
                  <DetailProductPage />
               </FavoriteContextProvider>
            } />
            <Route path='/products/favorite' element={
               <FavoriteContextProvider>
                  < FavoritesPage />
               </FavoriteContextProvider>
            } />
            <Route path='*' element={<NotFoundPage />} />
         </Routes>
      </div>
   )
}
export default App

