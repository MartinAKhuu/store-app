import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Products from './components/Products';

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
