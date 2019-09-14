import React, { FC } from 'react';

import styled from '@emotion/styled';
import Image, {
  ImageProps,
} from 'semantic-ui-react/dist/commonjs/elements/Image';

const CoverImage = styled(Image)`
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.1));
  margin-bottom: 0 !important;
  width: 55px !important;
`;

const SmallCoverImage: FC<ImageProps> = ({ children, ...props }) => (
  <CoverImage {...props} size="tiny" loading="lazy">
    {children}
  </CoverImage>
);

export default SmallCoverImage;
