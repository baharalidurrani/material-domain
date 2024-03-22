import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { type IRoute } from 'src/common/typings/routes.type';

const AboutModule = React.lazy(async () => await import('./AboutModule'));

export const AboutRoute: IRoute = {
  title: 'About',
  path: 'about',
  icon: InfoIcon,
  component: AboutModule,
  // subRoutes: [
  //   { icon: InfoIcon, component: HomePage1, path: "/page1", title: "Home Page 1" },
  //   { icon: NewReleasesIcon, component: HomePage2, path: "/page2", title: "Home Page 2" },
  // ],
};
