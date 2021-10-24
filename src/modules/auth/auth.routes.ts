import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { IRoute } from "src/common/typings/routes";
import { AuthModule } from "./AuthModule";
import { LoginPage, RegisterPage } from "./pages";

export const AuthRoute: IRoute = {
  title: "Authentication",
  path: "/auth",
  icon: HomeIcon,
  component: AuthModule,
  subRoutes: [
    { icon: InfoIcon, component: LoginPage, path: "/login", title: "Auth Login" },
    { icon: NewReleasesIcon, component: RegisterPage, path: "/register", title: "Auth Register" },
  ],
};
