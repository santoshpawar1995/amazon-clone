import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import {HiSearch } from "react-icons/ai";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
function Header () {
  return (
    <div className='container'>
    
    <div className='headerLogo'>
    <Link to="/">
    <img src='https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png' alt='' />
    </Link>
    <div className='address'>
    <LocationOnIcon/>
    <div className='adressBar'>
      <span className='address_one'>Hello</span>
      <span className='address_two'>Select your address</span>
      </div>
    </div>
    <div className='inputContainer'>

        <input type='text' className='input'/>
        <SearchIcon  className='icon'/>
      </div>
      
       <div className='navContainer'>
        <div className='nav1'>
           <span>Hello, Santosh</span>
           <Link to='/Login'>
           <span className='navAc'>Sign-in</span>
           </Link>
        </div>
        <div className='nav2'>
           <span>Returns</span>
           <span className='navAc'>& Order</span>
        </div>
        <Link to="/Cart">
        <div className='cart'>
        
            <ShoppingBasketIcon/>
            <span>6</span>
           
        </div>
        </Link>
        
    </div>
    </div>
    </div>
   
   
  
 
  )
}

export default Header
 