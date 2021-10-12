import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import InfoIcon from "@mui/icons-material/Info";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { IRoute } from "src/common/typings/routes";
import { Counter, LongText } from "./pages";
import { PlaceholderModule } from "./PlaceholderModule";

export const PlaceholderRoute: IRoute = {
  title: "Placeholder",
  path: "/placeholder",
  icon: NewReleasesIcon,
  component: PlaceholderModule,
  // guard: true,
  subRoutes: [
    { icon: InfoIcon, component: LongText, path: "/long", title: "Long Text" },
    { icon: ExtensionOutlinedIcon, component: Counter, path: "/counter", title: "Redux Counter" },
  ],
};
