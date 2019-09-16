import React, { FC } from 'react';
import styled from '@emotion/styled';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';

const LoaderWrapper = styled(Segment)`
  &&& {
    margin-top: 4rem;
  }
`;

const ListLoader: FC = () => (
  <LoaderWrapper basic>
    <Loader active inline="centered" />
  </LoaderWrapper>
);

export default ListLoader;
