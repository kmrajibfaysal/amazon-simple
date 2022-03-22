import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Product.css';

function Product({ product, handleAddToCart }) {
    const { img, name, seller, price, ratings } = product;
    return (
        <Card style={{ width: '18rem' }} className="rounded-3 col-md-4 col-lg-4 m-2 g-0">
            <Card.Img variant="top" className="p-2 card-img" src={img} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <span>Price: ${price}</span> <br />
                    <span className="mt-auto">
                        <small>Manufacturer: {seller}</small>
                        <br />
                        <small>Rating: {ratings}</small>
                    </span>
                </Card.Text>
            </Card.Body>
            <Button onClick={() => handleAddToCart(product)} className="w-100 cart-btn border-0">
                Add to Cart <i className="fa-solid fa-cart-plus cart-icon" />
            </Button>
        </Card>
    );
}

export default Product;
