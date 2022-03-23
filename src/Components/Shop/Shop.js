/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

function Shop() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className="shop-container  mx-2 row">
            <div className="products-container col-md-9 col-lg-10 mt-5">
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
            <div className="cart-container col-md-3 col-lg-2">
                <Cart cart={cart} />
            </div>
        </div>
    );
}

export default Shop;
