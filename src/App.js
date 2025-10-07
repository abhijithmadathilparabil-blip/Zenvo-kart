import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Zenvioproducts from './components/Zenvioproducts';
import {Mycontext} from './components/Mycontext';
import { useState } from 'react';
import Homepage from './components/Homepage';
import Shopproducts from './components/Shopproducts';
import './App.css';
import Footer from './components/Footer';
import Wishlist from './components/Wishlist';
import Cart from './components/cart';
import Login from './components/Login';
import Register from './components/Register';
import Category from './components/Category';
import About from './components/About';
import Profile from './components/Profile';
import Adminlogin from './components/adminlogin';
import Adminhome from './components/Adminhome';
import Productdetails from './components/Productdetails';
import Payment from './components/Payment';
import Forgotpass from './components/Forgotpass';

function App() {
  const [products, setProducts] = useState(Zenvioproducts)
  const [like,setLike]=useState([])
  const [cart,setCart]=useState([])
  const [user,setUser]=useState([])
  const [loginuser,setLoginuser]=useState([])
  const [detailss, setDetails] = useState([])
  const [adddetails,setAdddetails]=useState([])
  const [totalPrice,setPrice]=useState("")
  const [count,setCount]=useState(0)
  





  
  return (
    <div className="App">
      <Mycontext.Provider value={{totalPrice,setPrice,count,setCount,adddetails,setAdddetails,user,setUser,loginuser,setLoginuser, detailss,setDetails,products, setProducts,like,setLike,cart,setCart }}>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Homepage/>}/>
            <Route path='/shop' element={<Shopproducts/>}/> 
            <Route path="/footer" element={<Footer/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/regi' element={<Register/>}/>
            <Route path='/shop/:cat' element={<Category/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/admin' element={<Adminlogin/>}/>
            <Route path='/adminhome' element={<Adminhome/>}/>
            <Route path="/productdetails/:id" element={<Productdetails/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/forgotpass' element={<Forgotpass/>}/>
          </Routes>
        </BrowserRouter>
      </Mycontext.Provider>
    </div>
  );
}

export default App;