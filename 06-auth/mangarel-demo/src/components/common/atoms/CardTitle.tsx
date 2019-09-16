import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import Card from 'semantic-ui-react/dist/commonjs/views/Card';
import { CardHeaderProps } from 'semantic-ui-react/dist/commonjs/views/Card/CardHeader';
import { ThemeContext } from 'contexts';

const CardTitle: FC<CardHeaderProps> = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  const Title = styled(Card.Header)`
    color: ${theme.color.black} !important;
    font-size: 0.9rem !important;
    font-weight: 600 !important;
    margin-top: 0.1rem !important;
  `;

  return <Title {...props}>{children}</Title>;
};

export default CardTitle;
