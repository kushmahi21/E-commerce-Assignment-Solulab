import './App.css'
import { Route,Routes } from 'react-router-dom';
import Footer from './components/Footer'
import Home from './components/Home/Home';
import LoginPage from './components/Page/LoginPage';
import Navbar from './components/Navbar'
import WishlistUi from './components/Wishlist/WishlistUi';
import ContactPage from './components/Page/ContactPage';
import AboutPage from './components/Page/AboutPage';
import CheckOut from './components/Page/CheckOut';
import Signup from './components/Page/Signup';
import Cart from './components/Shopping/Cart';
import Account from './components/User/Account';
import ProductDetails from './components/ProductShow/ProductDetails';
import ViewProductAll from './components/ProductShow/ViewProductAll';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './scrollToTop';
import ErrorPage from './components/Page/ErrorPage';


function App() {
  
  return (
    <>
   
    <Navbar/>
    
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/LoginPage' element={<LoginPage/>}/>
      <Route path='/WishlistUi' element={<WishlistUi/>}/>
      <Route path='/ContactPage' element={<ContactPage/>}/>
      <Route path='/AboutPage' element={<AboutPage/>}/>
      <Route path="/CheckOut" element={<CheckOut/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Account" element={<Account/>}/>
      <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>
      <Route path="/ViewProoductAll" element={<ViewProductAll/>}/>
      <Route path="/Errorpage" element={<ErrorPage/>}/>
    </Routes>
    <ScrollToTop/>
    <Footer/>
      
    </>
  )
}

export default App
