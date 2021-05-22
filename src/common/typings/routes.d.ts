import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon";

export interface IRoute {
  title: string;
  path: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  component: () => JSX.Element;
  guard?: boolean;
  subRoutes?: IRoute[];
}
