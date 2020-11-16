import React, {useState} from 'react';
import { Redirect } from "react-router-dom";

import * as Routes from '../routes';

const SignInPage = ({children}) => {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = localStorage.getItem(userId);
    if (user !== null) {
      setUser(user);
      sessionStorage.setItem('currentUser', userId);
    } else {
      setMessage('Deze gebruiker bestaat niet.');
    }
  }

  const handleInputChange = async (e) => {
    setUserId(e.target.value);
  };

  return (
    <div className="page page--profile">
      <div className="container">
        <div className="row align-items-center profile">
          <div className="col-12 offset-md-2 col-md-8">
            <h2 className="detail">Geef je gebruikers-id in</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input type="text" name="name" id="name" placeholder="Voer jouw gebruikers-id in" value={userId} onChange={(e) => handleInputChange(e)} required/>
              {message !== '' ? <small>Deze gebruiker bestaat niet.</small> : ''}
              <input type="submit" className="cta cta--detail" value="Verzenden"/>
            </form>
            {!!user ? <Redirect to={Routes.PROFILE} /> : ''}
          </div>
        </div>
      </div>      
    </div>
  );
};

export default SignInPage;