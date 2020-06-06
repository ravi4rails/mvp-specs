import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const AdminUsers = React.lazy(() =>
  import(/* webpackChunkName: "admin-users" */ './admin-users')
);
const AdminUsersList= ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/users`} />
      <Route
        path={`${match.url}/users`}
        render={(props) => <AdminUsers {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default AdminUsersList;
