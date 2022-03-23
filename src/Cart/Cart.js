import React from 'react';
import './Cart.css';

function Cart({ cart }) {
    // Total Price
    const totalPrice =
        cart.length > 0 ? cart.map((item) => item.price).reduce((sum, item) => sum + item) : 0;
    // Total shipping charges
    const shippingCharge =
        cart.length > 0 ? cart.map((item) => item.shipping).reduce((sum, item) => sum + item) : 0;
    // Total tax charges
    const tax = Math.ceil(totalPrice * 0.01);

    // Grand Total
    const grandTotal = totalPrice + shippingCharge + tax;
    return (
        <div className="cart mt-2 sticky-top pt-4">
            <h4 className="text-center">Order Summary</h4>
            <div>
                <p>Selected Items: {cart.length}</p>
                <p>Total price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shippingCharge}</p>
                <p>Tax: ${tax}</p>
                <h6>Grand Total: ${grandTotal} </h6>
            </div>
            <div className="mt-5">
                <button className="btn btn-danger w-100 my-2" type="button">
                    Clear Cart <i className="fa-solid fa-trash fw-icon" />
                </button>
                <button className="btn btn-warning w-100 my-2 text-white" type="button">
                    Review Order <i className="fa-solid fa-arrow-right fw-light fw-icon w-100" />
                </button>
            </div>
        </div>
    );
}

export default Cart;
