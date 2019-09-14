import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Book from 'components/Book';
import Home from 'components/Home';
import NavigationBar from 'components/common/menubar/NavigationBar';
import Search from 'components/Search';
import Spacer from 'components/common/atoms/Spacer';
import paths from './paths';
import './App.css';

const App: FC = () => (
  <div>
    <NavigationBar />
    <Spacer />
    <Switch>
      <Route path={paths.book} component={Book} />
      <Route path={paths.home} component={Home} exact />
      <Route path={paths.search} component={Search} />
      <Redirect to={paths.home} />
    </Switch>
  </div>
);

export default App;
