
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';
//import Header from './components/Header/Header';


function App() {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>

    <Navbar setShowLogin = {setShowLogin}/>
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/order" element={<PlaceOrder/>}></Route>
    </Routes>
  </div>
  <Footer/></>
    
  );
}

export default App;
