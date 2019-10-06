import React, { FC } from 'react';

import Calendar from 'components/Home/Calendar';
import useBooks from 'hooks/use-books';

const CalendarContainer: FC = () => {
  const { books, loading } = useBooks({ limit: 50 });

  return <Calendar books={books} loading={loading} />;
};

export default CalendarContainer;
