import { firestore } from 'firebase/app';

export type Publisher = {
  id?: string;
  name: string;
  nameReading: string | null;
  website: string | null;
  createdAt: firestore.Timestamp | null;
  updatedAt: firestore.Timestamp | null;
};

export const blankPublisher: Publisher = {
  name: '',
  nameReading: null,
  website: null,
  createdAt: null,
  updatedAt: null,
};
