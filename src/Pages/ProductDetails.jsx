import React, { useContext } from 'react'
import { ShopContext } from '../Context/TechContext'
import { useParams } from 'react-router-dom';
import './CSS/ProductDetails.css'
import { Comments } from '../Components/Comments/Comments';

export const ProductDetails = () => {
    const { Items } = useContext(ShopContext);
    const { productId } = useParams();
    const product = Items.find((e) => e.id === Number(productId));
    const { addToCart } = useContext(ShopContext);

    return (
        <div className='style'>
            <div className='singleproduct'>
                <div className="content-left">
                    <div className="image-display">
                        <img src={product.image} alt="" />
                    </div>
                </div>
                <div className="content-right">
                    <h1>{product.name}</h1>
                    <div className="product-description">
                        <p>{product.description}</p>
                    </div>
                    <div className="product-price">
                        <p>Price: ${product.price}</p>
                    </div>
                    <button onClick={() => { addToCart(product.id) }}>Add to Cart</button>
                </div>
            </div>
            <br />
            <hr />
            <Comments />
        </div>
    )
}
