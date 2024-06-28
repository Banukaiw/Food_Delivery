
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
//import Header from './components/Header/Header';


function App() {
  return (
    <div className='app'>

      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/order" element={<PlaceOrder/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
