import React, { useEffect, useState, Fragment } from 'react';
import ProductsList from './ProductsList';

import { Link } from 'react-router-dom';

import * as Routes from '../../routes';

const ProductDetail = ({ product, otherProducts, user, reservered, addProductToAccount }) => {
  const formatDate = (time) => {
    const date = new Date(time);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${addZeros(day)}/${addZeros(month)}/${year}`;
  }

  const addZeros = (value) => {
    let time = value.toString();

    while (time.length < 2) {
      time = `0${time}`;
    }

    return time;
  }

  return (
    <div className="container detail">
      {!!product ? 
      (
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="d-flex justify-content-between flex-wrap">
              <div className="detail__thumb detail__top-part d-flex align-items-center justify-content-center">
                <img src={product.thumbnail} />
              </div>
              <div className="detail__content detail__top-part">
                <h1 className="title-page">{product.name}</h1>
                <p>{product.description}</p>
                <p className="title-text">Regio</p>
                <p>{product.regionName}</p>
                <p className="title-text">Te lenen tot</p>
                <p>{formatDate(product.rentTill)}</p>
                { !!user ? (reservered ? <button className="cta cta--detail" disabled>Je hebt dit al gereserveerd</button> : <button onClick={(e) => addProductToAccount(e)} className="cta cta--detail">Reserveer</button>) : <Link to={Routes.PROFILE} className="cta cta--detail">Log je in</Link>}
              </div>
            </div>
          </div>
          {product.images.length > 0 ? 
          (
            <div className="col-12 col-md-12">
              <h2 className="detail">Meer afbeeldingen</h2>
              <div className="d-flex flex-wrap justify-content-between">
                {product.images.map((image, index) => {
                  return (
                    <div key={index} className="detail__image d-flex align-items-center justify-content-center">
                      <img src={image} />
                    </div>
                  )
                })}
              </div>
            </div>
            )
            : ''
          }
        </div>
      ) : <p>Not a product</p>}
      <div className="detail__more-products">
          <h2 className="detail">Andere bekeken ook</h2>
          <ProductsList products={otherProducts}/>
      </div>
    </div>
  )
};

export default ProductDetail;