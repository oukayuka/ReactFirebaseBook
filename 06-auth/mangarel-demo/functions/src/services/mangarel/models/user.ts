import { firestore } from 'firebase/app';

export type User = {
  screenName: string;
  displayName: string | null;
  description: string | null;
  photoUrl: string | null;
  providerUid: string;
  followingCount: number;
  bookmarkingCount: number;
  uncheckedNotificationCount: number;
  createdAt: firestore.Timestamp | null;
  updatedAt: firestore.Timestamp | null;
};

export const blankUser: User = {
  screenName: '',
  displayName: null,
  description: null,
  photoUrl: null,
  providerUid: '',
  followingCount: 0,
  bookmarkingCount: 0,
  uncheckedNotificationCount: 0,
  createdAt: null,
  updatedAt: null,
};
