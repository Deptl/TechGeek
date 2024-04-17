import React from 'react'
import './SingleProduct.css'

export const SingleProduct = (props) => {
    const { product } = props;
    return (
        <div className='singleproduct'>
            <div className="content-left">
                <div className="image-display">
                    <img className="image-display-main" src={product.image} alt="" />
                </div>
            </div>
            <div className="content-right">
                <h1>{product.name}</h1>
            </div>

        </div>
    )
}
