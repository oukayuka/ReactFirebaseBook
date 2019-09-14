import { firestore } from 'firebase/app';

export type Author = {
  id?: string;
  name: string;
  nameReading: string | null;
  variation: string;
  createdAt: firestore.Timestamp | null;
  updatedAt: firestore.Timestamp | null;
};

export const blankAuthor: Author = {
  name: '',
  nameReading: null,
  variation: '',
  createdAt: null,
  updatedAt: null,
};
