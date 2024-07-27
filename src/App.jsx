import './App.css'
import Footer from './components/Footer'
import Home from './components/Home/Home';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
   
    <Navbar/>
    
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/LoginPage' element={<LoginPage/>}/>
      

    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
