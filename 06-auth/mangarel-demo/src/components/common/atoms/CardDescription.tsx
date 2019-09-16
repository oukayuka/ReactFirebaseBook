import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import Card from 'semantic-ui-react/dist/commonjs/views/Card';
import { CardDescriptionProps } from 'semantic-ui-react/dist/commonjs/views/Card/CardDescription';
import { ThemeContext } from 'contexts';

const CardDescription: FC<CardDescriptionProps> = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  const Desciption = styled(Card.Description)`
    &&& {
      color: ${theme.color.black};
      font-size: 0.8rem;
    }

    .separator {
      margin: 0 0.05rem;
    }

    strong {
      margin: 0 0.15rem !important;
    }
  `;

  return <Desciption {...props}>{children}</Desciption>;
};

export default CardDescription;
