/* eslint-disable no-console */
import * as functions from 'firebase-functions';
import admin from 'firebase-admin';

import { collectionName } from './services/mangarel/constants';

module.exports = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    const snap = await admin
      .firestore()
      .collection(collectionName.publishers)
      .get();
    const data = snap.docs.map(doc => doc.data());
    res.send({ data });
  });
