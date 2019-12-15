import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import styled from '@emotion/styled';
import Sidebar from 'semantic-ui-react/dist/commonjs/modules/Sidebar';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';

import { FirebaseContext, ThemeContext, UserContext } from 'contexts';
import paths from 'paths';

const NavigationBar: FC = () => {
  const { auth } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const signOut =
    auth && user
      ? (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          e.preventDefault();
          auth.signOut();
          history.replace(paths.home);
        }
      : () => undefined;

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
        {user ? (
          <>
            <Menu.Item onClick={signOut} position="right">
              {user.screenName}&nbsp;
              <Icon name="sign-out" />
            </Menu.Item>
          </>
        ) : (
          <Link
            to={{
              pathname: paths.signin,
              search: `?signInSuccessUrl=${location.pathname}`,
            }}
          >
            <Menu.Item position="right">
              <Icon name="sign-in" />
            </Menu.Item>
          </Link>
        )}
      </Sidebar>
    </NavBar>
  );
};

export default NavigationBar;
