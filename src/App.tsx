import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Search from './pages/Search';
import Profile from './pages/Profile';
import Login from './pages/Login';


/* Imports para el login */
import {App as CapApp} from '@capacitor/app'
import { Browser } from '@capacitor/browser';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from "react"

import LoginButton from './components/LoginButton';



setupIonicReact();

const App: React.FC = () => {
  const { handleRedirectCallback } = useAuth0();

  useEffect(() => {
    console.log("Hola");
    
    // Handle the 'appUrlOpen' event and call `handleRedirectCallback`
    CapApp.addListener('appUrlOpen', async ({ url }) => {
      if (url.includes('state') && (url.includes('code') || url.includes('error'))) {
        await handleRedirectCallback(url);
      }
      // No-op on Android
      await Browser.close();
    });
  }, [handleRedirectCallback]); 

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">

          <Menu />

          <IonRouterOutlet id="main">

            <Route path="/" exact={true}>
              <Redirect to="/page/Search" />
            </Route>

            <Route path="/page/Profile" exact={true}>
              <Profile />
            </Route>

            <Route path="/page/Login" exact={true}>
              <Login />
            </Route>

            <Route path="/page/Search" exact={true}>
              <Search />
            </Route>

          </IonRouterOutlet>

          

        </IonSplitPane>
        
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
