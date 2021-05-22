import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import { IRoute } from "src/common/typings/routes";
import { AuthModule } from "./AuthModule";
import { LoginPage, RegisterPage } from "./pages";

export const AuthRoute: IRoute = {
  title: "Auth Module",
  path: "/auth",
  icon: HomeIcon,
  component: AuthModule,
  subRoutes: [
    { icon: InfoIcon, component: LoginPage, path: "/login", title: "Auth Login" },
    { icon: NewReleasesIcon, component: RegisterPage, path: "/register", title: "Auth Register" },
  ],
};
