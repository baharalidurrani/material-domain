import BuildIcon from "@mui/icons-material/Build";
import { IRoute } from "src/common/typings/routes";
import { SkillsModule } from "./SkillsModule";

export const SkillsRoute: IRoute = {
  title: "Skills",
  path: "/skills",
  icon: BuildIcon,
  component: SkillsModule,
  // subRoutes: [
  //   { icon: InfoIcon, component: HomePage1, path: "/page1", title: "Home Page 1" },
  //   { icon: NewReleasesIcon, component: HomePage2, path: "/page2", title: "Home Page 2" },
  // ],
};
