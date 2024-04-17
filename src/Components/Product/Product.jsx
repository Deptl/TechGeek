import React from 'react'
import { Link } from 'react-router-dom';
import './Product.css'

export const Product = (props) => {
  return (
    <div className='product-main'>
        <Link to={`/productdetails/${props.id}`}>
        <div className="image">
        <img src={props.image}/>
        </div></Link>
        <div className="desc">
            <h1>{props.name}</h1>
            <span>{props.price}</span>
        </div>
    </div>
  )
}
