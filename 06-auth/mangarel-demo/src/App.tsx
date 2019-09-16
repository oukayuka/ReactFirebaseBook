import React, { FC, useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Book from 'components/Book';
import Home from 'components/Home';
import NavigationBar from 'components/common/menubar/NavigationBar';
import Search from 'components/Search';
import Signin from 'components/Signin';
import Spacer from 'components/common/atoms/Spacer';
import { UserContext } from './contexts';
import paths from './paths';
import './App.css';

const App: FC = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <NavigationBar />
      <Spacer />
      <Switch>
        <Route path={paths.book} component={Book} />
        <Route path={paths.home} component={Home} exact />
        <Route path={paths.search} component={Search} />
        {!user && <Route path={paths.signin} component={Signin} />}
        <Redirect to={paths.home} />
      </Switch>
    </div>
  );
};

export default App;
