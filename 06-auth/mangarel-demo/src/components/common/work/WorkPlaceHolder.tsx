import React, { FC } from 'react';
import styled from '@emotion/styled';
import Placeholder from 'semantic-ui-react/dist/commonjs/elements/Placeholder';

const MainPlaceholder = styled(Placeholder)`
  &&& {
    margin: 1rem 0.5rem;
  }

  .image.header::after {
    height: 11.5rem !important;
    margin-left: 8.5rem !important;
  }
`;

const WorkPlaceholder: FC = () => (
  <MainPlaceholder>
    <Placeholder.Header image></Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
  </MainPlaceholder>
);

export default WorkPlaceholder;
