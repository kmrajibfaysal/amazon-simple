import React from 'react';
import './Cart.css';

function Cart({ cart }) {
    return (
        <div className="cart mt-2 sticky-top pt-4">
            <h4 className="text-center">Order Summary</h4>
            <div>
                <p>Selected Items: {cart.length}</p>
                <p>Total price:</p>
                <p>Total Shipping Charge:</p>
                <p>Tax:</p>
                <h6>Grand Total:$ </h6>
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
