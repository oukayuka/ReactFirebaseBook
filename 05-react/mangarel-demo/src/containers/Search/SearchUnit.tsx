import React, { FC, SyntheticEvent, useState } from 'react';

import useBookSearch from 'hooks/use-book-search';
import SearchForm from 'components/Search/SearchForm';
import BookList from 'components/common/list/BookList';

const SearchUnit: FC = () => {
  const [values, setValues] = useState({ q: '' });
  const { books, loading } = useBookSearch(values.q, { limit: 20 });

  const handleChange = (
    targetName: string,
    newValue: string,
    event?: SyntheticEvent,
  ) => {
    if (event) event.persist();

    setValues(v => ({ ...v, [targetName]: newValue }));
  };

  return (
    <div>
      <SearchForm handleChange={handleChange} values={values} />
      <BookList books={books} loading={loading} />
    </div>
  );
};

export default SearchUnit;
