import React, { FC } from 'react';
import useReactRouter from 'use-react-router';

import useBook from 'hooks/use-book';
import BookMain from 'components/Book/BookMain';
import paths from 'paths';

const BookMainContainer: FC = () => {
  const { history, match } = useReactRouter<{ bookId: string }>();
  const { bookId } = match.params;
  if (!bookId) history.replace(paths.home);
  const { book } = useBook(bookId);

  return book ? (
    <div>
      <BookMain book={book} />
    </div>
  ) : (
    <div />
  );
};

export default BookMainContainer;
