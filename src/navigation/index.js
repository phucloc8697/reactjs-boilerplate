import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';

class AppNavigation extends React.PureComponent {
  render() {
    return (
      <Switch>
        {routes.map((route, index) => {
          return <Route key={index} path={route.path} exact={route.exact} render={() => <route.component />} />;
        })}
      </Switch>
    );
  }
}

export default AppNavigation;
