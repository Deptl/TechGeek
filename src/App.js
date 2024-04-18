import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { ProductDetails } from './Pages/ProductDetails';
import { Cart } from './Pages/Cart';
import { Footer } from './Components/Footer/Footer';
import { LoginSignup } from './Pages/LoginSignup';
import { Payment } from './Components/Payment/Payment';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productdetails' element={<ProductDetails/>}>
          <Route path=':productId' element={<ProductDetails/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
 }

export default App;
