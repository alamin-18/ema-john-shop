import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    const [oder,setOder]=useState([])

    const handleButton = (product)=>{
        const oderSummary =[...oder,product]
        setOder(oderSummary)
    }

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
        
            <div className="product-container"> {
                products.map(product => <Product key={product.id} handleButton={handleButton} product={product}></Product>)
            } </div>
            <div className="oder-summary"> <h1>Oder Summary: {oder.length}</h1> </div>
        </div>
    );
};

export default Shop;