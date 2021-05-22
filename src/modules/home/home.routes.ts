import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import { IRoute } from "src/common/typings/routes";
import { HomeModule } from "./HomeModule";
import { HomePage1, HomePage2 } from "./pages";

export const HomeRoute: IRoute = {
  title: "Home Module",
  path: "/homemodule",
  icon: HomeIcon,
  component: HomeModule,
  subRoutes: [
    { icon: InfoIcon, component: HomePage1, path: "/page1", title: "Home Page 1" },
    { icon: NewReleasesIcon, component: HomePage2, path: "/page2", title: "Home Page 2" },
  ],
};
