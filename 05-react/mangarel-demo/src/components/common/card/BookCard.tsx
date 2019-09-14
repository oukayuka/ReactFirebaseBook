import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import CardContent from 'components/common/atoms/CardContent';
import CardDescription from 'components/common/atoms/CardDescription';
import CardInfo from 'components/common/atoms/CardInfo';
import CardTitle from 'components/common/atoms/CardTitle';
import ItemCard from 'components/common/atoms/ItemCard';
import SmallCoverImage from 'components/common/atoms/SmallCoverImage';
import { Book } from 'services/mangarel/models/book';
import { getAuthorsText, getCoverImage, getHumanDate } from '../item-tools';

const BookCard: FC<{ book: Book }> = ({ book }) => {
  const authorsText = getAuthorsText(book);

  return (
    <Link to={`/book/${book.id}`}>
      <ItemCard key={book.isbn}>
        <CardContent>
          <SmallCoverImage src={getCoverImage(book)} floated="left" />
          <CardTitle>{book.title}</CardTitle>
          <CardInfo>
            <CardDescription>
              {authorsText && (
                <>
                  {authorsText}
                  <span className="separator">｜</span>
                </>
              )}
              {getHumanDate(book.publishedOn)}
            </CardDescription>
            <CardDescription>
              {book.publisher && book.publisher.name}
            </CardDescription>
          </CardInfo>
        </CardContent>
      </ItemCard>
    </Link>
  );
};

export default BookCard;
