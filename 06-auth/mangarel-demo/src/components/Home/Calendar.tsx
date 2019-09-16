import React, { FC } from 'react';

import { Book } from 'services/mangarel/models/book';
import DividingHeader from 'components/common/header/DividingHeader';
import CalendarList from 'components/common/list/CalendarList';
import ListLoader from 'components/common/atoms/ListLoader';

type CalendarProps = { books: Book[]; loading?: boolean };

const Calendar: FC<CalendarProps> = ({ books, loading }) => (
  <div>
    <DividingHeader icon="calendar alternate outline">
      もうすぐ発売の新刊
    </DividingHeader>
    {loading ? <ListLoader /> : <CalendarList books={books} />}
  </div>
);

export default Calendar;
