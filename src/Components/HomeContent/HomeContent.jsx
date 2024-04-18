import React, { useContext } from 'react'
import Banner from '../../Assets/banner.jpeg'
import './HomeContent.css'
import { Product } from '../Product/Product'
import { Footer } from '../Footer/Footer'
import { ShopContext } from '../../Context/TechContext'

export const HomeContent = () => {

  const {Items} = useContext(ShopContext);
  return (
    <div className='main-container'>
        <img src={Banner} alt="" />
        <div>
            <h2>Explore More Products</h2>
            <hr />
            <div className="products">
                {Items.map((item, i)=>{
                    return <Product key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                })}
            </div>
        </div>
        <Footer/>
    </div>
  )
}
