import PhoneIcon from "@mui/icons-material/Phone";
import { IRoute } from "src/common/typings/routes";
import { ContactModule } from "./ContactModule";

export const ContactRoute: IRoute = {
  title: "Contact",
  path: "/contact",
  icon: PhoneIcon,
  component: ContactModule,
  // subRoutes: [
  //   { icon: InfoIcon, component: HomePage1, path: "/page1", title: "Home Page 1" },
  //   { icon: NewReleasesIcon, component: HomePage2, path: "/page2", title: "Home Page 2" },
  // ],
};
