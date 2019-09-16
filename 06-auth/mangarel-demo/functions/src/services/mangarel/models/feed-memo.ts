import { firestore } from 'firebase/app';

export type FeedMemo = {
  id?: string;
  title: string | null;
  author: string | null;
  publisher: string | null;
  releaseDate: string | null;
  isbn: string | null;
  fetchedAt: firestore.Timestamp | null;
  createdAt: firestore.Timestamp | null;
};

export const blankFeedMemo: FeedMemo = {
  title: null,
  author: null,
  publisher: null,
  releaseDate: null,
  isbn: null,
  fetchedAt: null,
  createdAt: null,
};
