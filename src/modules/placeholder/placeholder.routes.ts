import ExtensionOutlinedIcon from "@material-ui/icons/ExtensionOutlined";
import InfoIcon from "@material-ui/icons/Info";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import { IRoute } from "src/common/typings/routes";
import { Counter, LongText } from "./pages";
import { PlaceholderModule } from "./PlaceholderModule";

export const PlaceholderRoute: IRoute = {
  title: "Placeholder Module",
  path: "/placeholder",
  icon: NewReleasesIcon,
  component: PlaceholderModule,
  guard: true,
  subRoutes: [
    { icon: InfoIcon, component: LongText, path: "/long", title: "Long Text" },
    { icon: ExtensionOutlinedIcon, component: Counter, path: "/counter", title: "Redux Counter" },
  ],
};
