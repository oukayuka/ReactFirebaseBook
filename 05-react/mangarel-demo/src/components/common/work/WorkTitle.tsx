import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';

import { ThemeContext } from 'contexts';

type WorkTitleProps = {
  title: string;
};

const WorkTitle: FC<WorkTitleProps> = ({ title }) => {
  const theme = useContext(ThemeContext);
  const Title = styled(Header)`
    &&& {
      color: ${theme.color.black};
      font-size: 1rem;
      font-weight: 600;
      margin: 0.75rem 0;
      padding-top: 0.25rem;
    }
  `;

  return <Title as="h1">{title}</Title>;
};

export default WorkTitle;
