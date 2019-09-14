import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import { ThemeContext } from 'contexts';

const DividingHeader: FC<{ icon?: string }> = ({ icon, children }) => {
  const theme = useContext(ThemeContext);
  const Heading = styled(Header)`
    border-bottom: 1px solid rgba(34, 36, 38, 0.33) !important;
    color: ${theme.color.black} !important;
    font-size: 1em !important;
    margin: 1em 0 0.2em !important;
    padding: 0 0.35em !important;
  `;
  const InsideIcon = styled(Icon)`
    font-size: 1.1em !important;
    margin: 0 0.15em 0.4em 0 !important;
  `;

  return (
    <Heading as="h2" dividing>
      <InsideIcon name={icon} />
      {children}
    </Heading>
  );
};

export default DividingHeader;
