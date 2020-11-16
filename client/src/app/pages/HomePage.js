import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import * as Routes from '../routes';

import { ProductsList } from '../components/products';
import { useFirestore } from '../services';


const HomePage = () => {
  const [products, setProducts] = useState(null);
  const {getProducts} = useFirestore(); 

  useEffect(() => {
    const fetchProducts = async () => {
      let products = await getProducts();
      products = products.slice(0, 4);
      setProducts(products);
    };

    fetchProducts();

  }, [getProducts]);

  return (
    <div className="page page--home">
      <div className="head-image d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5">
              <h2 className="home">
                Heb je iets nodig? Geen zin om het te kopen? Leen het nu bij ons!
              </h2>
              <Link to={Routes.PRODUCTS} className="cta cta--detail">Bekijk ons assortiment</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-12">
            <h2 className="detail">
              Recent toegevoegd
            </h2>
            <ProductsList products={products}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;