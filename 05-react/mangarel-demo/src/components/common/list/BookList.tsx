import React, { FC } from 'react';
import styled from '@emotion/styled';

import { Book } from 'services/mangarel/models/book';
import BookCard from 'components/common/card/BookCard';
import ListLoader from 'components/common/atoms/ListLoader';

const ListWrapper = styled.div`
  margin: 1rem 0.5rem;
`;

const BookList: FC<{ books: Book[]; loading?: boolean }> = ({
  books,
  loading = false,
}) =>
  loading ? (
    <ListLoader />
  ) : (
    <ListWrapper>
      {books.map(book => (
        <BookCard book={book} key={book.id} />
      ))}
    </ListWrapper>
  );

export default BookList;
