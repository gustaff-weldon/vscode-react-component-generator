import React, { FC } from 'react';
import { Route, Switch } from  'react-router-dom';

import { xyzRoutes } from  '@zen/Routes';

import ListComponent from './ListComponent';
import DetailsComponent from './DetailsComponent';

const __ComponentName__Container: FC = () => {
  const { routeOne, routeTwo } = xyzRoutes;

  return (
    <ExampleContextProvider<Type> initialValues={{ id: 1 }}>
      <Switch>
        <Route path={routeOne.path}>
          <ListComponent />
        </Route>
        <Route path={routeTwo.path}>
          <DetailsComponent />
        </Route>
      </Switch>
    </ExampleContextProvider>
  );
};

export default __ComponentName__Container;
