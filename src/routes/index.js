import React from "react";
import MainLayout from "../layout/main";
import AuthLayout from "../layout/auth";
import Home from '../pages/Home';
import Concert from '../pages/Concert';
import Theatre from '../pages/Theatre';
import Festival from '../pages/Festival';
import StandUp from '../pages/StandUp';
import NotFound from '../pages/NotFound';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PastEvents from "../pages/PastEvents";
import EventDetail from "../pages/EventDetail";
import  AdminPanel  from "../pages/AdminPanel"
const mainLayoutWrapper = (PageComponent) => (
  <MainLayout>
    <PageComponent />
  </MainLayout>
);

// const authLayoutWrapper = (PageComponent) => (
//   <AuthLayout>
//     <PageComponent />
//   </AuthLayout>
// );

const routes = [
  {
    path: '/',
    element: mainLayoutWrapper(Home)
  },
  {
    path: '/events',
    element: mainLayoutWrapper(Home)
  },
  {
    path: '/events/:name',
    element: mainLayoutWrapper(EventDetail)
  },
  {
    path: '/concert',
    element: mainLayoutWrapper(Concert)
  },
  {
    path: '/concert/:name',
    element: mainLayoutWrapper(EventDetail)
  },
  {
    path: '/theatre',
    element: mainLayoutWrapper(Theatre)
  },
  {
    path: '/theatre/:name',
    element: mainLayoutWrapper(EventDetail)
  },
  {
    path: '/festival',
    element: mainLayoutWrapper(Festival)
  },
  {
    path: '/festival/:name',
    element: mainLayoutWrapper(EventDetail)
  },
  {
    path: '/standup',
    element: mainLayoutWrapper(StandUp)
  },
  {
    path: '/standup/:name',
    element: mainLayoutWrapper(EventDetail)
  },
  {
    path: '/pastevents',
    element: mainLayoutWrapper(PastEvents)
  },
  {
    path: '/pastevents/:name',
    element: mainLayoutWrapper(EventDetail)
  },
  {
    path: '/signin',
    element: mainLayoutWrapper(SignIn)
  },
  {
    path: '/signup',
    element: mainLayoutWrapper(SignUp)
  },
  {
    path: '/admin',
    element: mainLayoutWrapper(AdminPanel)
  },
  {
    path: '*',
    element: mainLayoutWrapper(NotFound)
  }
];

export default routes;