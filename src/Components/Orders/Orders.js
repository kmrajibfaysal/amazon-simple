/* eslint-disable no-unused-vars */
import React from 'react';
import useProducts from '../../hooks/useProducts';

function Orders() {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h2>This is orders: {products.length}</h2>
        </div>
    );
}

export default Orders;
