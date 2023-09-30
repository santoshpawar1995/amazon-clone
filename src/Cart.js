import React from 'react'
import './Cart.css'
function Cart() {
  return (
    <div className='container'>
    <div className='cart'>
      <div className='cart__left'>
        <img className="img_banner" src='https://influencermarketinghub.com/wp-content/uploads/2021/11/Amazon-Display-Ad-Amazon-1024x140.jpg' alt=''/> 
      <div>
       <h2  className='cart_title' > Your Shopping Cart</h2>
      </div>
      </div>
      <div>
        <h2 className='cart_right'> The Subtotal go here</h2>
      </div>
    </div>
    </div>
  )
}

export default Cart