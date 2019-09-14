import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/app';

import App from './App';
import FirebaseApp from './FirebaseApp';
import { ThemeContext } from './contexts';
import mangarelTheme from './theme';
import firebaseConfig from './firebase-config';
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <FirebaseApp>
      <ThemeContext.Provider value={mangarelTheme}>
        <App />
      </ThemeContext.Provider>
    </FirebaseApp>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
