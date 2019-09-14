import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import Card from 'semantic-ui-react/dist/commonjs/views/Card';
import { CardContentProps } from 'semantic-ui-react/dist/commonjs/views/Card/CardContent';
import { ThemeContext } from 'contexts';

const CardContent: FC<CardContentProps> = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  const Content = styled(Card.Content)`
    &&& {
      color: ${theme.color.black};
      padding: 0.55rem 0.75rem 0.4rem;
    }
  `;

  return <Content {...props}>{children}</Content>;
};

export default CardContent;
