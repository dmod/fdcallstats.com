import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Login = Loadable({
  loader: () => import('./views/Login'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const VCalls = Loadable({
  loader: () => import('./views/VCalls'),
  loading: Loading,
});

const NewCall = Loadable({
  loader: () => import('./views/NewCall'),
  loading: Loading,
});

const Units = Loadable({
  loader: () => import('./views/Units'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/vcalls', name: 'VCalls', component: VCalls },
  { path: '/newcall', name: 'NewCall', component: NewCall },
  { path: '/units', name: 'Units', component: Units },
];

export default routes;
