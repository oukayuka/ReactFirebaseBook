import React, { FC } from 'react';
import styled from '@emotion/styled';

const Group = styled.div`
  padding: 0 0.11rem 0.2rem;
  width: auto;
`;

const CardGroup: FC = ({ children }) => <Group>{children}</Group>;

export default CardGroup;
