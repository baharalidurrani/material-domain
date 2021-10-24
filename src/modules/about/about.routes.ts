import InfoIcon from "@mui/icons-material/Info";
import { IRoute } from "src/common/typings/routes";
import { AboutModule } from "./AboutModule";

export const AboutRoute: IRoute = {
  title: "About",
  path: "/about",
  icon: InfoIcon,
  component: AboutModule,
  // subRoutes: [
  //   { icon: InfoIcon, component: HomePage1, path: "/page1", title: "Home Page 1" },
  //   { icon: NewReleasesIcon, component: HomePage2, path: "/page2", title: "Home Page 2" },
  // ],
};
