import * as functions from 'firebase-functions';
import admin from 'firebase-admin';

import { collectionName } from './services/mangarel/constants';

admin.initializeApp();

export const publishers = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    const snap = await admin
      .firestore()
      .collection(collectionName.publishers)
      .get();
    const data = snap.docs.map(doc => doc.data());
    res.send({ data });
  });
