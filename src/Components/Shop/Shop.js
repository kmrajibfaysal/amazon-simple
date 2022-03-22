/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

function Shop() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        console.log(product);
    };

    return (
        <div className="shop-container mt-4 mx-2 row">
            <div className="products-container col-md-10">
                <div className="row">
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
            </div>
            <div className="cart-container col-md-2">Order Summery</div>
        </div>
    );
}

export default Shop;
