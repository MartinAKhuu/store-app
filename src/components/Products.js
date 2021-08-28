import React from 'react';
import Filters from './Filters';
import Product from './Product';

const Products = ({ products }) => {

    return (
        <div id="products-region" className="container">
            <div className="row">
                <div className="col-2">
                    <Filters products={products} />
                </div>
                <div className="col-10">
                    <div className="row">
                        <Product products={products} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;
