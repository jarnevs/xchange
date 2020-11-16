import React, {} from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { AuthProvider, FirebaseProvider, FirestoreProvider } from './services';

import { RouteWithLayout } from './utilities';

import { BaseLayout } from './layouts';
import { HomePage, ProductsPage, RewardsPage, ProductDetailPage, ContactPage, ProfilePage, SignInPage, SignUpPage } from './pages';

import * as Routes from './routes';

import './App.scss';

function App() {
  return (
    <div className="app">
      <FirebaseProvider>
        <AuthProvider>
          <FirestoreProvider>
            <Router basename={'/xchange/'}>
              <Switch>
                <RouteWithLayout exact path={Routes.LANDING} layout={ BaseLayout } component={ HomePage }/>
                <RouteWithLayout exact path={Routes.PRODUCTS} layout={ BaseLayout } component={ ProductsPage }/>
                <RouteWithLayout exact path={Routes.PRODUCT_DETAIL} layout={ BaseLayout } component={ ProductDetailPage }/>
                <RouteWithLayout exact path={Routes.REWARDS} layout={ BaseLayout } component={ RewardsPage }/>
                <RouteWithLayout exact path={Routes.CONTACT} layout={ BaseLayout } component={ ContactPage }/>
                <RouteWithLayout exact path={Routes.PROFILE} layout={ BaseLayout } component={ ProfilePage }/>
                <RouteWithLayout exact path={Routes.PROFILE_SIGN_UP} layout={ BaseLayout } component={ SignUpPage }/>
                <RouteWithLayout exact path={Routes.PROFILE_SIGN_IN} layout={ BaseLayout } component={ SignInPage }/>
              </Switch>
            </Router>
          </FirestoreProvider>
      </AuthProvider>
    </FirebaseProvider>
    </div>
  );
}

export default App;
