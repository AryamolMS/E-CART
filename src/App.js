import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './PAGES/Cart';
import Home from './PAGES/Home';
import Wishlist from './PAGES/Wishlist';
import Header from './COMPONENTS/Header';
import Footer from './COMPONENTS/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
