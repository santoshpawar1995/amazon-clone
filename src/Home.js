import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>

<div className='container'>
  <img src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg" alt=''/>

<div className='product__row'>
<Product
  title="The lean startup"
  price={44.33}
  image="https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg"
  rating={5}
/>
<Product
  title="NHR AK47 Toy Gun with Laser Light, 500 Bullets, 24-inch Long Shooting Gun for Kids 8+ Years"
  price={29.44}
  image="https://m.media-amazon.com/images/I/31E-griDbqL._QL70_FMwebp_.jpg"
  rating={3}
/>

</div>
<div className='product__row'>
<Product
  title="online shopping bags"
  price={15.33}
  image="https://st2.depositphotos.com/1029233/7400/i/450/depositphotos_74007749-stock-photo-group-of-happy-friends-shopping.jpg"
  rating={4}
  />
  <Product
  title="designs under lifetime, "
  price={5.60}
  image="https://t3.ftcdn.net/jpg/02/41/43/18/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg"
  rating={2}
  />
  <Product
  title=" stock imagery of shopping malls "
  price={9.76}
  image="https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
  rating={3}

  />


</div>
<div className='product__row'>
<Product
  title="Mahindra Thar"
  price={123.89}
  image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar/10743/1690192572470/front-left-side-47.jpg"
  rating={5}

  />
</div>
      
    </div>
    </div>
  )
}

export default Home