import React, { useState } from 'react';
import { Link, NavLink  } from 'react-router-dom';

// import CourtesyNavigation from './CourtesyNavigation';

import * as Routes from '../../routes';

const Header = ({children}) => {
  const [hide, setHide] = useState(true);

  const showMenu = () => {
    setHide(!hide);
  }

  return (
    
    <header className="app-header">
      <nav className="container">
        <div className="row align-items-center">
          <div className="col-6 col-md-6">
            <h1 className="logo">
              <Link to={Routes.LANDING} className="logo__link">XCHANGE</Link>
            </h1>
          </div>
          <div className="col-6 col-md-6 main-nav d-flex justify-content-end align-items-center">
            <ul className={hide ? 'main-nav__list hide' : 'main-nav__list'}>
              <li className="main-nav__item">
                <NavLink to={Routes.PRODUCTS} className="main-nav__link" activeClassName="active">Zoeken</NavLink>
              </li> 
              <li className="main-nav__item">
                <NavLink to={Routes.REWARDS} className="main-nav__link" activeClassName="active">Rewards</NavLink>
              </li> 
              <li className="main-nav__item">
                <NavLink to={Routes.CONTACT} className="main-nav__link" activeClassName="active">Contact</NavLink>
              </li>          
              <li className="main-nav__item">
                <NavLink to={Routes.PROFILE} className="main-nav__link cta-nav" activeClassName="active">Profiel</NavLink>
              </li> 
            </ul>
            <i onClick={(e) => showMenu()} className={hide ? 'fas fa-bars' : 'fas fa-times'} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
