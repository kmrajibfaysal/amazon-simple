/* eslint-disable no-unused-vars */
import React from 'react';
import './ReviewItem.css';

function ReviewItem({ product, handleRemoveProduct }) {
    const { name, price, shipping, quantity, img } = product;
    return (
        <div className="review-item d-flex my-3 p-2 mx-4">
            <div>
                <img
                    src={img}
                    alt=""
                    width="91px"
                    height="91px"
                    className="rounded-2 mx-2 my-auto"
                />
            </div>
            <div className="d-flex justify-content-between align-items-center w-100">
                <div className="ms-2 py-2 ">
                    <h6 title={name}>{name.length > 20 ? `${name.slice(0, 20)}...` : name}</h6>
                    <p>
                        Price: <span className="text-warning">${price}</span>
                    </p>
                    <p>
                        Shipping Charge: <span className="text-warning">${shipping}</span>
                    </p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="ms-auto">
                    <button
                        onClick={() => handleRemoveProduct(product)}
                        type="button"
                        className="button"
                    >
                        <i className="fa-solid fa-trash" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReviewItem;
