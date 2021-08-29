import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Products from './components/Products';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/styles.css';

const App = () => {

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <Header />
      <Products products={products} />
    </>
  )
}

export default App;
