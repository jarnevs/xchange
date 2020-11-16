import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../../routes';

const ProductsList = ({products}) => {

  return (
    <div className="d-flex flex-wrap justify-content-between">
      {!!products && products.length > 0 ? products.map((product) => {
        return (
          <Link to={Routes.PRODUCT_DETAIL.replace(':id', product.id)} key={product.id} className="card">
            <div className="card__image">
              <img src={product.thumbnail}/>
            </div>
            <div className="card__text">
              <h2>{product.name}</h2>
            </div>
          </Link>
        )
      }) : 
        <p>Geen producten </p>}
    </div>
  )
};

export default ProductsList;