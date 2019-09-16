import React, { FC } from 'react';

import styled from '@emotion/styled';
import Container, {
  ContainerProps,
} from 'semantic-ui-react/dist/commonjs/elements/Container';

const ContainerFrame = styled(Container)`
  && {
    margin-top: 1em;
  }
`;

const MainFrame: FC<ContainerProps> = ({ children, ...props }) => (
  <ContainerFrame {...props}>{children}</ContainerFrame>
);

export default MainFrame;
