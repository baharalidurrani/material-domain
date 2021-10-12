import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

export interface IRoute {
  title: string;
  path: string;
  pathParam?: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  component: ReactElement;
  guard?: boolean;
  subRoutes?: IRoute[];
}
