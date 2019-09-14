import admin from 'firebase-admin';

import { collectionName } from '../services/mangarel/constants';
import { FeedMemo } from '../services/mangarel/models/feed-memo';

export const saveFeedMemo = async (
  db: admin.firestore.Firestore,
  memos: FeedMemo[],
  publisher: string,
) => {
  const memosRef = db.collection(collectionName.feedMemos);
  const query = await memosRef.where('publisher', '==', publisher).get();
  const existingMemos = query.docs.map(doc => doc.data() as FeedMemo);
  let count = 0;

  for await (const memo of memos) {
    if (existingMemos.some(m => m.title === memo.title)) {
      continue;
    } else {
      await memosRef.doc().set({
        ...memo,
        fetchedAt: admin.firestore.Timestamp.fromDate(new Date(0)),
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      count += 1;
    }
  }

  return count;
};
