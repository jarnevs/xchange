import React, { } from 'react';
import { Link  } from 'react-router-dom';

import * as Routes from '../../routes';

const Footer = ({children}) => {
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 d-flex align-items-center justify-content-center">
            <p className="text-center padding-none p-0 m-0">&copy; Jarne Van Steendam - Arteveldehogeschool</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
