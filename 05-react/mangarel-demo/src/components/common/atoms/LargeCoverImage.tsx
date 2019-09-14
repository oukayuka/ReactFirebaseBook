import React, { FC } from 'react';

import styled from '@emotion/styled';
import Image, {
  ImageProps,
} from 'semantic-ui-react/dist/commonjs/elements/Image';

const ImageWrapper = styled.div`
  img {
    border: 1px #efefef solid;
    box-shadow: 0 1px 6px 1px rgba(0, 0, 0, 0.15);
    margin-bottom: 0 !important;
  }

  @media screen and (max-width: 1024px) {
    img {
      width: 300px !important;
    }
  }

  @media screen and (max-width: 480px) {
    img {
      width: 120px !important;
    }
  }
`;

const LargeCoverImage: FC<ImageProps> = ({ children, ...props }) => (
  <ImageWrapper>
    <Image {...props} size="medium">
      {children}
    </Image>
  </ImageWrapper>
);

export default LargeCoverImage;
