import React from 'react';

import { useDispatch } from 'react-redux';
import { add_to_cart } from '../redux/reducers';

const Product = ({ products }) => {

    const dispatch = useDispatch();

    return (
        <>
            {products.map((product) => (
                <div className="col-lg-3 col-md-6 col-xs-12 mb-3 mt-3" key={product.id}>
                    <div className="card">
                        <img src={product.image} className="card-img-top img-fluid" alt={product.title} style={{ height: "300px" }} />
                        <div className="card-body">
                            <h5 className="card-title product-title">{product.title}</h5>
                            <p className="card-text">${product.price.toFixed(2)}</p>
                        </div>
                        <button className="btn btn-primary" onClick={() => dispatch(add_to_cart({ product: product, quantity: 1 }))}>Add to cart</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Product;
