import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
function Product({id,title,image,price,rating}) {
  return (
    <div className='product'>
      <div className='product__info'>
        <span>{title}</span>
        <span className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </span>
      </div>
      <div className='product__rating'>
        {Array(rating).fill().map((_, i)=>(
          <span><StarIcon/></span>
        ))}
       
      </div>
      
        <img src={image} alt=''/>
     
<button>Add To Cart</button>
    </div>
  )
}

export default Product 