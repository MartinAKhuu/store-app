import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';

import { useSelector } from "react-redux";

const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);

    const getTotalCart = (cart) => {
        let totalCart = 0;

        for (let i = 0; i < cart.length; i++) {
            totalCart += cart[i].product.price * cart[i].quantity;
        }

        return totalCart;
    }

    useEffect(() => {
        setTotalPrice(getTotalCart(cart));
    }, [cart])

    return (
        <div className="modal fade" id="cart-modal" tabIndex="-1" aria-labelledby="cart-modal-label" style={{ display: "none" }} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="cart-modal-label">Shopping Cart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <CartItem />
                    </div>
                    <div className="modal-footer flex-column flex-sm-row justify-content-between">
                        <p>Total Price: ${totalPrice.toFixed(2)}</p>
                        <button type="button" className="btn btn-primary" disabled>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
