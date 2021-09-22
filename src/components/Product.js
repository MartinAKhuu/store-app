import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart } from '../redux/reducers/cart';

const Product = ({ products }) => {

    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    return (
        <>
            {products.map((product) => {
                // Render product if the product's category is equal to the filter, or render everything if filter is set to empty
                return (product.category === filter || filter === "")
                    ?
                    <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12 mb-3 mt-3" key={product.id}>
                        <div className="card">
                            <img src={product.image} className="card-img-top img-fluid" alt={product.title} style={{ height: "300px" }} />
                            <div className="card-body">
                                <h3 className="card-title product-title">{product.title}</h3>
                                <p className="card-text">${product.price.toFixed(2)}</p>
                            </div>
                            <button className="btn btn-primary" onClick={() => dispatch(add_to_cart({ product: product, quantity: 1 }))}>Add to cart</button>
                        </div>
                    </div>
                    :
                    null;
            })}
        </>
    )
}

export default Product;
