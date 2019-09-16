import React, { FC } from 'react';
import styled from '@emotion/styled';

const Group = styled.div`
  padding-top: 1rem;
  width: auto;
`;

const ButtonGroup: FC = ({ children }) => <Group>{children}</Group>;

export default ButtonGroup;
