import React, { useState, useEffect } from 'react';
import { RewardsList } from '../components/rewards';

import { v4 as uuidv4 } from 'uuid';

const RewardsPage = () => {
  const [rewards, setRewards] = useState(null);
  const [updateState, setUpdateState] = useState(false);
  const [userId, setUserId] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setUpdateState(false);
    const getCurrentUser = () => {
      const userId = sessionStorage.getItem('currentUser');
      const user = JSON.parse(localStorage.getItem(userId));

      setUserId(userId);
      setCurrentUser(user);
    }

    const getRewards = async () => {
      const response = await fetch('https://pgmgent-jarnvans.github.io/coupons/index.json');
      const data = await response.json();
      data.sort((a, b) => {
        if (a.coins > b.coins) {
          return 1;
        }

        if (a.coins < b.coins) {
          return -1;
        }

        return 0;
      })
      setRewards(data);
    };

    getCurrentUser()

    if (!rewards) {
      getRewards();
    }
  }, [updateState]);

  const saveRewardToAccount = (reward) => {
    const rewardWithCode = {
      ...reward,
      code: uuidv4()
    }
    currentUser.rewards.push(rewardWithCode);
    currentUser.coins -= rewardWithCode.coins;
    localStorage.setItem(userId, JSON.stringify(currentUser));
    setUpdateState(true);
  }

  return (
    <div className="page page--bookmarks">
      <div className="container">
          <div className="row">
            <div className="col-12 title-page">
              <h1>Rewards {!!currentUser ? <small>(Coins: {currentUser.coins})</small> : ''}</h1>
            </div>
            <div className="col-12 col-md-12">
              <RewardsList rewards={rewards} user={currentUser} saveRewardToAccount={saveRewardToAccount}/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default RewardsPage;