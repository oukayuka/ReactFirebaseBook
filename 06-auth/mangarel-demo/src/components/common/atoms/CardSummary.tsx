import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import Card from 'semantic-ui-react/dist/commonjs/views/Card';
import { CardDescriptionProps } from 'semantic-ui-react/dist/commonjs/views/Card/CardDescription';
import { ThemeContext } from 'contexts';

const CardDescription: FC<CardDescriptionProps> = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  const Desciption = styled(Card.Description)`
    &&& {
      color: ${theme.color.gray};
      font-size: 0.55rem;
      line-height: 1rem;
      margin-top: 0.75rem;
    }
  `;

  return <Desciption {...props}>{children}</Desciption>;
};

export default CardDescription;
