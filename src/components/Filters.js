import React, { useState, useEffect } from 'react';

import { useDispatch } from "react-redux";
import { set_filter, clear_filter } from '../redux/reducers/filter';

const Filters = ({ products }) => {

    const [filters, setFilters] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const getFilters = products => {
            if (products) {
                for (let product of products) {
                    if (!filters.includes(product.category))
                        setFilters([...filters, product.category]);
                }
            }
        }

        getFilters(products);
    }, [filters, products])

    return (
        <>
            <h2 className="h3 m-3">Categories</h2>
            <div >
                <input type="radio" id={"#filter-0"} name="filter" value="" onClick={() => dispatch(clear_filter())} />
                <label htmlFor="html" className="p-1">Clear filter</label>
            </div>
            {filters.map((filter, index) => (
                <div key={"filter" + index}>
                    <input type="radio" id={"#filter-" + index + 1} name="filter" value={filter} onClick={(e) => dispatch(set_filter(e.target.value))} />
                    <label htmlFor="html" className="p-1">{filter[0].toUpperCase() + filter.substring(1)}</label>
                </div>
            ))}
        </>
    )
}

export default Filters;