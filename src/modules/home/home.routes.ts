import HomeIcon from "@mui/icons-material/Home";
import { IRoute } from "src/common/typings/routes";
import { HomeModule } from "./HomeModule";

export const HomeRoute: IRoute = {
  title: "Home",
  path: "/home",
  icon: HomeIcon,
  component: HomeModule,
  // subRoutes: [
  //   { icon: InfoIcon, component: HomePage1, path: "/page1", title: "Home Page 1" },
  //   { icon: NewReleasesIcon, component: HomePage2, path: "/page2", title: "Home Page 2" },
  // ],
};
