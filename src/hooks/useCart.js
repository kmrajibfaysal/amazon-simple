import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        // eslint-disable-next-line guard-for-in
        for (const id in storedCart) {
            const addedProduct = products.find((p) => p.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);
    return [cart, setCart];
};

export default useCart;