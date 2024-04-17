import React, { useContext } from 'react'
import { ShopContext } from '../Context/TechContext'
import { useParams } from 'react-router-dom';
import { SingleProduct } from '../Components/SingleProduct/SingleProduct';

export const ProductDetails = () => {
    const {Items} = useContext(ShopContext);
    const {productId} = useParams();
    const product = Items.find((e)=> e.id === Number(productId));

  return (
    <div>
        <div className='singleproduct'>
            <div className="content-left">
                <div className="image-display">
                    <img className="image-display-main" src={product.image} alt="" />
                </div>
            </div>
            <div className="content-right">
                <h1>{product.itemName}</h1>
                <div className="product-description">
                    <p>{product.description}</p>
                </div>
                <div className="product-price">
                    <p>Price: ${product.price}</p>
                </div>
            </div>

        </div>
    </div>
  )
}
