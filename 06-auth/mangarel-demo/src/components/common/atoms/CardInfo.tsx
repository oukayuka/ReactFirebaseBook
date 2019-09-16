import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from 'contexts';

const CardInfo: FC = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  const Info = styled.div`
    && {
      color: ${theme.color.black};
      height: 3rem;
      line-height: 1.15rem;
      margin-top: 0.2rem;
    }
  `;

  return <Info {...props}>{children}</Info>;
};

export default CardInfo;
