import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { type IRoute } from 'src/common/typings/routes';
import { AuthModule } from './AuthModule';
import { LoginPage, RegisterPage } from './pages';

export const AuthRoute: IRoute = {
  title: 'Authentication',
  path: 'auth',
  icon: LockIcon,
  component: AuthModule,
  subRoutes: [
    { icon: LoginIcon, component: LoginPage, path: 'login', title: 'Auth Login' },
    { icon: NewReleasesIcon, component: RegisterPage, path: 'register', title: 'Auth Register' },
  ],
};
