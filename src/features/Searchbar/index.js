import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Page } from 'components';

const Searchbar = () => {
  const [products, setProducts] = useState([]);
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const { data } = await axios.get('https://dummyjson.com/products');
      setProducts(data.products);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = e => {
    setInputVal(e.target.value);
  };

  return (
    <Page>
      <input placeholder='Search...' value={inputVal} onChange={handleSearch} />

      {products
        .filter(product => {
          if (inputVal === '') {
            return true;
          } else if (
            product.title.toLowerCase().includes(inputVal.toLowerCase())
          ) {
            return true;
          }
          return false;
        })
        .map(product => {
          return <p key={product.id}>{product.title}</p>;
        })}
    </Page>
  );
};

export default Searchbar;
