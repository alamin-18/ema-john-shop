import React from 'react';
import "./Product.css"

const Product = (props) => {
    const {img,name,price,ratings} = props.product
    return (
        <div className='product-cart'>
           
            <div className='crad'>
            <img className='img' src={img} alt="" />
            
            <div>
                <h3>{name}</h3>
                <h3>${price}</h3>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            </div>
            <button onClick={() => props.handleButton(props.product)} className='btn'>Add To Cart</button>
        </div>
    );
};

export default Product;