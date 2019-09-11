/* eslint-disable @typescript-eslint/no-non-null-assertion */
import admin from 'firebase-admin';
import { parseFromTimeZone } from 'date-fns-timezone';

import { collectionName } from '../services/mangarel/constants';
import { Author } from '../services/mangarel/models/author';
import { Book, blankBook } from '../services/mangarel/models/book';
import { Publisher } from '../services/mangarel/models/publisher';
import { BookItem } from '../services/rakuten/models/book-item';
import { FeedMemo } from '../services/mangarel/models/feed-memo';
import { addCounter } from './record-counter';
import { uniform } from '../utils/text-processor';

export const createBook = async (
  db: admin.firestore.Firestore,
  memo: FeedMemo,
  bookItem: BookItem,
  authors: Author[],
  publisher: Publisher,
) => {
  const { title, titleKana, isbn, itemUrl, largeImageUrl } = bookItem;
  const match = itemUrl.match(/books.rakuten.co.jp\/rb\/(\d+)/);
  const rbCode = match ? match[1] : '';
  const hasImage = /\.jpg/.test(largeImageUrl);
  const publishDate = parseFromTimeZone(memo.releaseDate!, {
    timeZone: 'Asia/Tokyo',
  });
  const publishedOn = admin.firestore.Timestamp.fromDate(publishDate);

  const book: Book = {
    ...blankBook,
    title: uniform(title),
    titleReading: uniform(titleKana),
    publisherId: publisher.id!,
    publisher,
    authorIds: authors.map(a => a.id!),
    authors,
    isbn,
    rbCode,
    hasImage,
    publishedOn,
  };

  const booksRef = db.collection(collectionName.books);
  await booksRef.doc(book.isbn).set({
    ...book,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  });
  await addCounter(db, collectionName.books);

  return { ...book, id: isbn };
};
