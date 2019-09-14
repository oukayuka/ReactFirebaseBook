import React, { FC } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { FirebaseContext } from './contexts';

const FirebaseApp: FC = ({ children }) => {
  const db = firebase.firestore();

  return (
    <FirebaseContext.Provider value={{ db }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseApp;
