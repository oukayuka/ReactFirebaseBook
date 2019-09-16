import React, { FC } from 'react';
import styled from '@emotion/styled';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';

const GridWrapper = styled.div`
  margin: 0.5rem 1rem 0.75rem;
  padding-top: 1rem;
  width: auto;
`;

const ButtonGroup: FC = ({ children }) => (
  <GridWrapper>
    <Grid doubling columns={8}>
      {children}
    </Grid>
  </GridWrapper>
);

export default ButtonGroup;
