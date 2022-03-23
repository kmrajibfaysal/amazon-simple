import React from 'react';

function Cart({ cart }) {
    return (
        <div className="cart mt-4">
            <h4 className="text-center">Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
}

export default Cart;
