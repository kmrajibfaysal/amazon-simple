/* eslint-disable no-unused-vars */
import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

function Orders() {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = (product) => {
        const rest = cart.filter((pd) => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    };

    return (
        <div className="shop-container mx-2 row">
            <div className="products-container col-md-9 col-lg-10 mt-5">
                <div className="row">
                    {cart.map((product) => (
                        <ReviewItem
                            key={product.id}
                            product={product}
                            handleRemoveProduct={handleRemoveProduct}
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

export default Orders;
