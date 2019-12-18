import React, { FC } from 'react';
import { useHistory, useParams } from 'react-router';

import useBook from 'hooks/use-book';
import BookMain from 'components/Book/BookMain';
import paths from 'paths';

const BookMainContainer: FC = () => {
  const history = useHistory();
  const { bookId } = useParams();
  if (!bookId) history.replace(paths.home);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { book } = useBook(bookId!);

  return book ? <BookMain book={book} /> : <div />;
};

export default BookMainContainer;
