import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {Product}=props;
    const {addToCart}=useContext(ShopContext);
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={Product.image} alt="" />
                    <img src={Product.image} alt="" />
                    <img src={Product.image} alt="" />
                    <img src={Product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img src={Product.image} className='productdisplay-main-img' alt="" />
                </div>


            </div>
            <div className="productdisplay-right">
                <h1>{Product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${Product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${Product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Discover the art of fragrance with our carefully curated collection of premium perfumes. From timeless classics to modern blends, each scent is crafted to leave a lasting impression. Elevate your everyday moments with fragrances that define your style and personality.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Volume</h1>
                    <div className="productdisplay-right-sizes">
                        <div>30ml</div>
                        <div>50ml</div>
                        <div>100ml</div>
                        <div>150ml</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(Product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category: </span>Unisex, Floral, Fresh</p>
                <p className='productdisplay-right-category'><span>Tags: </span>Luxury, Warm, Spicy, Date Night, Long-lasting</p>

            </div>
            
        </div>
    )
}

export default ProductDisplay
