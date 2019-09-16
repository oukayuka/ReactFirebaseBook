import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import Card from 'semantic-ui-react/dist/commonjs/views/Card';
import { ThemeContext } from 'contexts';

const CardAttribute: FC = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  const Attribute = styled(Card.Meta)`
    &&& {
      color: ${theme.color.lightGray};
      font-size: 0.66rem;
      text-align: right;
    }
  `;

  return <Attribute {...props}>{children}</Attribute>;
};

export default CardAttribute;
