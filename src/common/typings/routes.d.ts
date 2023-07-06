import { type OverridableComponent } from '@mui/material/OverridableComponent';
import { type SvgIconTypeMap } from '@mui/material/SvgIcon';

export interface IRoute {
  title: string;
  path: string;
  pathParam?: string;
  icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
  component: ReactElement;
  guard?: boolean;
  subRoutes?: IRoute[];
}
