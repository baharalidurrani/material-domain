import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon";

export interface IRoute {
  title: string;
  path: string;
  pathParam?: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  component: ReactElement;
  guard?: boolean;
  subRoutes?: IRoute[];
}
