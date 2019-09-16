/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';

import { ThemeContext } from 'contexts';
import { Author } from 'services/mangarel/models/author';

const WorkAuthors: FC<{ authors: Author[] | null }> = ({ authors }) => {
  const theme = useContext(ThemeContext);
  const AuthorInfo = styled.div`
    &&& {
      color: ${theme.color.gray};
      font-size: 0.85rem;
      font-weight: 600;
      margin: 0 0 1rem !important;
      padding-top: 0 !important;
    }
  `;

  return (
    <AuthorInfo>
      {authors &&
        authors.map(author => (
          <span key={author.id}>
            <span className="author-name">{author.name}</span>
          </span>
        ))}
    </AuthorInfo>
  );
};

export default WorkAuthors;
