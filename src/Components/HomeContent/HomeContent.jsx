import React from 'react'
import Banner from '../../Assets/homebanner.avif'
import './HomeContent.css'
import {Items} from '../../Items'
import { Product } from '../Product/Product'
import { Footer } from '../Footer/Footer'

export const HomeContent = () => {
  return (
    <div className='main-container'>
        <img src={Banner} alt="" />
        <div>
            <h2>Explore More Products</h2>
            <hr />
            <div className="products">
                {Items.map((items, i)=>{
                    return <Product key={i} id={items.id} name={items.itemName} image={items.image} price={items.price}/>
                })}
            </div>
        </div>
        <Footer/>
    </div>
  )
}
