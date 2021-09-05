import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Products from './components/Products';

import ReactLoading from 'react-loading';

const App = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loaderType = "spin";
  const loaderColor = "#333";

  const fetchData = async () => {
    setLoading(true);
    await fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then(function (json) {
        setProducts(json);
        setLoading(false);
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      {loading
        ? <ReactLoading className="react-loader" color={loaderColor} type={loaderType} />
        : <>
          <Header />
          <Products products={products} />
        </>}
    </>
  )
}

export default App;
