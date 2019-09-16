import React, { FC } from 'react';

import { Book } from 'services/mangarel/models/book';
import LargeCoverImage from 'components/common/atoms/LargeCoverImage';
import { getCoverImage } from 'components/common/item-tools';
import MainFrame from 'components/common/atoms/MainFrame';
import WorkTitle from 'components/common/work/WorkTitle';
import WorkAuthors from 'components/common/work/WorkAuthors';
import WorkPublishedOn from 'components/common/work/WorkPublishedOn';
import ButtonGroup from 'components/common/work/ButtonGroup';
import Spacer from 'components/common/atoms/Spacer';
import WorkPlaceholder from 'components/common/work/WorkPlaceHolder';
import RegisterCalendarButton from './RegisterCalenderButton';
import RakutenBooksButton from './RakutenBooksButton';

const BookMain: FC<{ book: Book }> = ({ book }) => (
  <MainFrame>
    <Spacer height={0.25} />
    {!book.isbn ? (
      <WorkPlaceholder />
    ) : (
      <>
        <div>
          <LargeCoverImage src={getCoverImage(book, 'large')} floated="left" />
          <WorkTitle title={book.title} />
          <WorkAuthors authors={book.authors} />
          <WorkPublishedOn publishedOn={book.publishedOn} />
        </div>
        <Spacer height={0.25} />
        <ButtonGroup>
          <RegisterCalendarButton book={book} />
          <RakutenBooksButton book={book} />
        </ButtonGroup>
      </>
    )}
  </MainFrame>
);

export default BookMain;
