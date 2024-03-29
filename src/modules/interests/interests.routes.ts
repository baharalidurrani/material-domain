import GradeIcon from '@mui/icons-material/Grade';
import { type IRoute } from 'src/common/typings/routes.type';
import { InterestsModule } from './InterestsModule';

export const InterestsRoute: IRoute = {
  title: 'Interests',
  path: 'interests',
  icon: GradeIcon,
  // guard: true,
  component: InterestsModule,
  // subRoutes: [
  //   { icon: InfoIcon, component: HomePage1, path: "/page1", title: "Home Page 1" },
  //   { icon: NewReleasesIcon, component: HomePage2, path: "/page2", title: "Home Page 2" },
  // ],
};
