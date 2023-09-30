
import './App.css';

import Cart from './Cart';

import {

 BrowserRouter as
  Router,
  Routes,
  Route


} from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Sign_in from './Sign_in';

function App() {
  return (
   
    <>
     
      <Router>
      <Header/>
        <Routes>
        
          <Route path="/cart" element={<Cart/>} exact />
          <Route path="/" element={<Home/>} exact />
          <Route path="/Login" element={<Sign_in/>} exact />
        </Routes>
      </Router>
    </>

  );
}

export default App;
