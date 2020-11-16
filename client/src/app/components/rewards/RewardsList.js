import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../../routes';

const RewardsList = ({rewards, user, saveRewardToAccount}) => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {!!rewards ? rewards.map((reward) => {
        return (
          <div key={reward.id} className="card">
            <div className="card__image card__image--reward">
              <img src={reward.image}/>
            </div>
            <div className="card__text">
              <div>
                <h2>{reward.company}</h2>
                <p className="special">{reward.discount}% korting</p>
              </div>
              {user !== null && reward.coins <= user.coins ? <button onClick={() => saveRewardToAccount(reward)} className="cta little-x">{reward.coins} <i className="fas fa-coins"></i></button> : <button className="cta little-x" disabled>{reward.coins} <i className="fas fa-coins"></i></button> }
            </div>
          </div>
        )
      }) : <p>No rewards</p>}
    </div>
  )
};

export default RewardsList;