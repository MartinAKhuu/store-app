import React, { useEffect, useState } from 'react';
import Cart from './Cart';

import { useSelector } from "react-redux";

const Header = () => {

    const cart = useSelector((state) => state.cart);
    const [totalCartItems, setTotalCartItems] = useState(cart.length);

    const getTotalCartItems = cart => {
        let totalItems = 0;

        for (let i = 0; i < cart.length; i++) {
            totalItems += cart[i].quantity;
        }

        return totalItems;
    }

    useEffect(() => {
        setTotalCartItems(getTotalCartItems(cart));
    }, [cart]);

    return (
        <div id="header-region" className="container-fluid d-flex justify-content-between">
            <h1 className="display-5 p-3">Khuu Commerce</h1>
            <button type="button" className="btn position-relative" data-bs-toggle="modal" data-bs-target="#cart-modal">
                <span><i className="fas fa-shopping-cart fa-2x"></i></span>
                <span className="position-absolute start-70 translate-middle badge rounded-pill bg-danger" style={{ top: "30px" }}>{totalCartItems}</span>
            </button>
            <Cart />
        </div>
    )
}

export default Header;
