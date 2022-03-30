/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

function Shop() {
    const [products, setProducts] = useProducts();
    /* const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];

        for (const key in storedCart) {
            const addedProduct = products.find((product) => product.id === key);
            if (addedProduct) {
                const quantity = storedCart[key];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]); */

    const [cart, setCart] = useCart(products);

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find((product) => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter((product) => product.id !== selectedProduct.id);
            exists.quantity += 1;
            newCart = [...rest, exists];
        }

        // const newCart = [...cart, selectedProduct];

        setCart(newCart);
        addToDb(selectedProduct.id);
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
