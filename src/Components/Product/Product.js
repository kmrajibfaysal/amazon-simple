/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Product.css';

function Product(props) {
    const { img, name, seller, price, ratings } = props.product;
    return (
        <Card style={{ width: '18rem' }} className="rounded-3">
            <Card.Img variant="top" className="p-2 card-img" src={img} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p>Price: ${price}</p> <br />
                    <div className="mt-auto">
                        <small>Manufacturer: {seller}</small>
                        <br />
                        <small>Rating: {ratings}</small>
                    </div>
                </Card.Text>
            </Card.Body>
            <Button className="w-100 cart-btn border-0">
                Add to Cart <i className="fa-solid fa-cart-plus cart-icon" />
            </Button>
        </Card>
    );
}

export default Product;
