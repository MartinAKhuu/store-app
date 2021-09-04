import React from 'react';
import Filters from './Filters';
import Product from './Product';

const Products = ({ products }) => {

    return (
        <div id="products-region" className="container">
            <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-4 d-sm-block d-none">
                    <Filters products={products} />
                </div>
                <div className="col-lg-10 col-md-9 col-sm-8">
                    <div className="row">
                        <Product products={products} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;
