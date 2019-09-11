import { firestore } from 'firebase/app';
import { Author } from './author';
import { Publisher } from './publisher';

export type Book = {
  id?: string;
  title: string;
  titleReading: string | null;
  publisherId: string;
  publisher: Publisher | null;
  authorIds: string[];
  authors: Author[];
  isbn: string;
  rbCode: string;
  hasImage: boolean;
  publishedOn: firestore.Timestamp | null;
  createdAt: firestore.Timestamp | null;
  updatedAt: firestore.Timestamp | null;
};

export const blankBook: Book = {
  title: '',
  titleReading: null,
  publisherId: '',
  publisher: null,
  authorIds: [],
  authors: [],
  isbn: '',
  rbCode: '',
  hasImage: false,
  publishedOn: null,
  createdAt: null,
  updatedAt: null,
};
