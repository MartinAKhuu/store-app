import React from 'react';
import Product from './Product';

const Products = ({ products }) => {
    return (
        <div id="products-region" className="container">
            <div className="row">
                <Product products={products} />
            </div>
        </div>
    )
}

export default Products;
