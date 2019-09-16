import { firestore } from 'firebase/app';
import { format } from 'date-fns';

import { Book } from 'services/mangarel/models/book';

export const getAuthorsText = (book: Book) =>
  (book.authors || [])
    .map(autor => autor.name)
    .join(', ')
    .replace(/\s*\(\)/g, '');

export const getCoverImage = (
  book: Book,
  size: 'small' | 'large' = 'small',
) => {
  const classCode = book.isbn.substring(9, 13);

  if (size === 'small') {
    if (book.hasImage) {
      return `https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/${classCode}/${book.isbn}.jpg?_ex=200x200`;
    }

    return '/images/comingsoon-small.png';
  }

  if (book.hasImage) {
    return `https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/${classCode}/${book.isbn}.jpg?_ex=640x640`;
  }

  return '/images/comingsoon-large.png';
};

type HumanDateOptions = {
  slashes?: boolean;
  noYear?: boolean;
};
const defaultHumanDateOptions: HumanDateOptions = {
  slashes: false,
  noYear: false,
};

export const getHumanDate = (
  timestamp: firestore.Timestamp | null,
  options?: HumanDateOptions,
) => {
  const opts = { ...defaultHumanDateOptions, ...options };
  let dateText = '';

  if (!timestamp) return dateText;
  if (opts.noYear) {
    dateText = format(timestamp.toDate(), 'M月d日');
  } else {
    dateText = format(timestamp.toDate(), 'yyyy年M月d日');
  }
  if (opts.slashes) {
    dateText = dateText.replace(/[年月日]/g, '/').replace(/\/$/, '');
  }

  return dateText;
};
