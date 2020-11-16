import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../routes';

import { v4 as uuidv4 } from 'uuid';

const SignUpPage = ({children}) => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = uuidv4();
    const firstPartId = id.substring(0, id.indexOf('-'));
    const userId = `${name}-${firstPartId}`;

    const profile = {
      id,
      name,
      products: [],
      rewards: [],
      coins: 5,
    }

    setUserId(`${name}-${firstPartId}`);
    localStorage.setItem(userId, JSON.stringify(profile));
    sessionStorage.setItem('currentUser', userId);
  }

  const handleInputChange = async (e) => {
    setName(e.target.value)
  };

  return (
    <div className="page page--profile">
      <div className="container">
        <div className="row align-items-center profile">
          <div className="col-12 offset-md-2 col-md-8">
            { userId === '' ? 
              (
                <div>
                  <h2 className="detail">Geef je naam in</h2>
                  <form onSubmit={(ev) => handleSubmit(ev)}>
                    <input type="text" name="name" id="name" placeholder="Voer jouw naam in" value={name} onChange={(e) => handleInputChange(e)} required/>
                    <input type="submit" className="cta cta--detail" value="Verzenden"/>
                  </form>
                </div>
              ) : (
                <div>
                  <h2>Uw gebruikersId is: <strong className="accent">{userId}</strong>.<br/>Deze gebruikt u om in te loggen.</h2>
                  <Link to={Routes.PROFILE} className="cta cta--detail">Ga terug naar profiel</Link>
                </div>
              )
            }
          </div>
        </div>
      </div>      
    </div>
  );
};

export default SignUpPage;