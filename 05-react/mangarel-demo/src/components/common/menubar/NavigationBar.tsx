import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Sidebar from 'semantic-ui-react/dist/commonjs/modules/Sidebar';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';

import { ThemeContext } from 'contexts';
import paths from 'paths';

const NavigationBar: FC = () => {
  const theme = useContext(ThemeContext);
  const NavBar = styled.header`
    .ui.top.visible.sidebar {
      background-color: ${theme.color.primary};
    }
  `;

  return (
    <NavBar>
      <Sidebar as={Menu} direction="top" width="thin" visible>
        <Link to={paths.home}>
          <Menu.Item>
            <Icon name="home" />
          </Menu.Item>
        </Link>
        <Link to={paths.search}>
          <Menu.Item>
            <Icon name="search" />
          </Menu.Item>
        </Link>
      </Sidebar>
    </NavBar>
  );
};

export default NavigationBar;
