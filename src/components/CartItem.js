import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { add_to_cart, remove_from_cart } from "../redux/reducers";

const CartItem = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <>
            {!cart.length
                ?
                <p>Your cart is empty! Add some to see what happens!</p>
                :
                <>
                    {cart.map(product => (
                        <div className="d-flex flex-md-row flex-column" key={product.product.id}>
                            <div className="d-flex flex-column align-items-center flex-grow-1">
                                <img src={product.product.image} alt={product.product.title} className="img-fluid" style={{ height: "200px", maxWidth: "200px" }} />
                                <p className="p-2">{product.product.title}</p>
                            </div>
                            <div className="d-flex flex-column align-self-center">
                                <div className="d-flex flex-nowrap">
                                    <button className="btn btn-primary" onClick={() => dispatch(remove_from_cart(product.product.id))}>-</button>
                                    <span className="align-self-center p-2">${(product.product.price * product.quantity).toFixed(2)}</span>
                                    <button className="btn btn-primary" onClick={() => dispatch(add_to_cart({ product: product.product, quantity: 1 }))}>+</button>
                                </div>
                                <span className="p-2 align-self-center">Quantity: {product.quantity}</span>
                            </div>
                        </div>
                    ))}
                </>
            }
        </>
    )
}

export default CartItem
