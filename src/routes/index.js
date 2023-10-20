import React from "react";
import MainLayout from "../layout/main";
import Home from '../pages/Home';
import Concert from '../pages/Concert';
import Theatre from '../pages/Theatre';
import Festival from '../pages/Festival';
import StandUp from '../pages/StandUp';
import NotFound from '../pages/NotFound';

const mainLayoutWrapper = (PageComponent) => (
  <MainLayout>
    <PageComponent />
  </MainLayout>
);

const routes = [
  {
    path: '/',
    element: mainLayoutWrapper(Home)
  },
  {
    path: '/events/:id',
    element: mainLayoutWrapper(Home)
  },
  {
    path: 'concert',
    element: mainLayoutWrapper(Concert)
  },
  {
    path: 'theatre',
    element: mainLayoutWrapper(Theatre)
  },
  {
    path: 'festival',
    element: mainLayoutWrapper(Festival)
  },
  {
    path: 'stand-up',
    element: mainLayoutWrapper(StandUp)
  },
  {
    path: '*',
    element: mainLayoutWrapper(NotFound)
  }
];

export default routes;