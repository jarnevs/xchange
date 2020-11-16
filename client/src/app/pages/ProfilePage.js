import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import * as Routes from '../routes';

import { useFirestore } from '../services';


const ProfilePage = () => {
  const [products, setProducts] = useState(null);
  const [userId, setUserId] = useState('');
  const [updateState, setUpdateState] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const {getProducts} = useFirestore();

  useEffect(() => {
    setUpdateState(false);
    const getCurrentUser = () => {
      const userId = sessionStorage.getItem('currentUser');
      const user = JSON.parse(localStorage.getItem(userId));

      setUserId(userId);
      setCurrentUser(user);
    }

    const fetchProducts = async () => {
      const productsUser = [];
      const userId = sessionStorage.getItem('currentUser');
      const user = JSON.parse(localStorage.getItem(userId))
      if (user !== null) {
        let products = await getProducts();

        products.forEach((product) => {
          if (user.products.includes(product.id)) {
            productsUser.push(product);
          }
        })

        setProducts(productsUser);
      }
    };

    getCurrentUser();

    fetchProducts();
  }, [updateState]);

  const signOut = () => {
    setCurrentUser(null);
    sessionStorage.removeItem('currentUser');
  }

  const removeFromProducts = (e, id) => {
    e.preventDefault()
    const index = currentUser.products.indexOf(id);
    currentUser.products.splice(index, 1);
    currentUser.coins += 5;
    localStorage.setItem(userId, JSON.stringify(currentUser));
    setUpdateState(true);
  }

  return (
    <div className="page page--profile">
      <div className="container">
        <div className="row align-items-center">
            {!currentUser ? 
              (
                <div className="col-12 offset-md-2 col-md-8 profile">
                  <h2 className="detail">Meld je aan of log in</h2>
                  <div className="">
                    <Link to={Routes.PROFILE_SIGN_UP} className="cta cta--detail">Aanmelden</Link>
                    <Link to={Routes.PROFILE_SIGN_IN} className="cta cta--detail">Inloggen</Link>
                  </div>
                </div>
              ) : 
              (
                <div className="col-12 col-md-12">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <h1>{userId} <small>(Coins: {currentUser.coins})</small></h1>
                    <button className="cta" onClick={(e) => signOut(e)}>Log uit</button>
                  </div>
                  <h2 className="detail">Producten</h2>
                  <div className="d-flex justify-content-between flex-wrap">

                  {!!products && products.length > 0 ?
                    (
                        products.map((product) => {
                          return (
                            <div key={product.id} className="card">
                              <div className="card__image">
                                <img src={product.thumbnail}/>
                              </div>
                              <div className="card__text">
                                <div>
                                  <h2>{product.name}</h2>
                                </div>
                                <button onClick={(e) => removeFromProducts(e, product.id)} className="cta little-x"><i className="fas fa-times"></i></button>
                              </div>
                            </div>
                          )
                        })
                    ) : <p>Nog geen producten gereserveerd</p>
                  }
                  </div>
                  <h2 className="detail">Rewards</h2>
                  <div className="d-flex justify-content-between flex-wrap">
                  {currentUser.rewards.length > 0 ?
                    (
                      currentUser.rewards.map((reward, i) => {
                        return (
                          <div key={i} className="card">
                            <div className="card__image card__image--reward">
                              <img src={reward.image}/>
                            </div>
                            <div className="card__text">
                              <div>
                                <h2>{reward.company}</h2>
                                <p className="no-margin"><strong>{reward.discount}% korting</strong></p>
                                <p className="no-margin special">{reward.code}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    ) : <p>Nog geen rewards gekocht</p>
                  }
                  </div>
                </div>
              )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;