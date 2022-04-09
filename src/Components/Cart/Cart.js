/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({ cart, children }) {
    let quantity = 0;
    let total = 0;
    let shipping = 0;

    // two digit price handler
    const priceHandler = (x) => parseFloat(Number.parseFloat(x).toFixed(2), 10);
    // Total Price
    // const totalPrice = priceHandler(
    //     cart.length > 0 ? cart.map((item) => item.price).reduce((sum, item) => sum + item) : 0
    // );

    // Total shipping charges
    // const shippingCharge = priceHandler(
    //     cart.length > 0 ? cart.map((item) => item.shipping).reduce((sum, item) => sum + item) : 0
    // );
    // Total tax charges
    // const tax = priceHandler(totalPrice * 0.01);

    // Grand Total
    // const grandTotal = priceHandler(totalPrice + shippingCharge + tax);

    for (const product of cart) {
        quantity += product.quantity;
        total += product.price * product.quantity;
        shipping += product.shipping;
    }

    const tax = parseFloat((total * 0.01).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className="cart mt-2 sticky-top pt-4">
            <h4 className="text-center">Order Summary</h4>
            <div>
                <p>Selected Items: {quantity}</p>
                <p>Total price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h6>Grand Total: ${grandTotal} </h6>
            </div>
            <div className="mt-5">
                <button className="btn btn-danger w-100 my-2" type="button">
                    Clear Cart
                </button>
                <Link to="/orders">
                    <button className="btn btn-warning w-100 my-2 text-white" type="button">
                        {children}
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Cart;
