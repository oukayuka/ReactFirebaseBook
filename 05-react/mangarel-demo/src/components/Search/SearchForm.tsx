import React, { FC, FormEvent } from 'react';
import styled from '@emotion/styled';

import Input from 'semantic-ui-react/dist/commonjs/elements/Input';

type SearchFormProps = {
  handleChange?: (targetName: string, newValue: string) => void;
  handleSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  values?: { q: string };
  loading?: boolean;
};

const FormWrapper = styled.div`
  margin: 1.25rem auto;
  width: 75%;

  .ui.input > input {
    border-radius: 2.5rem;
  }
`;

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

const SearchForm: FC<SearchFormProps> = ({
  handleChange = () => {},
  values = { q: '' },
}) => (
  <FormWrapper>
    <form onSubmit={handleSubmit}>
      <Input
        icon="search"
        iconPosition="left"
        placeholder="作品名または作者名"
        onChange={(event, data) => handleChange('q', String(data.value))}
        value={values.q}
        fluid
      />
    </form>
  </FormWrapper>
);

export default SearchForm;
