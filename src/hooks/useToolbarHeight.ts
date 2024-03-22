import { useMediaQuery, useTheme } from '@mui/material';

interface MinHeight {
  minHeight: number;
}

export function useToolbarHeight(): number {
  const {
    mixins: { toolbar },
    breakpoints,
  } = useTheme();
  const toolbarDesktopQuery = breakpoints.up('sm');
  const toolbarLandscapeQuery = `${breakpoints.up('xs')} and (orientation: landscape)`;
  const isDesktop = useMediaQuery(toolbarDesktopQuery);
  const isLandscape = useMediaQuery(toolbarLandscapeQuery);
  let currentToolbarMinHeight;
  if (isDesktop) {
    currentToolbarMinHeight = toolbar[toolbarDesktopQuery];
  } else if (isLandscape) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    currentToolbarMinHeight = (toolbar[breakpoints.up('xs')] as any)[`@media (orientation: landscape)`];
  } else {
    currentToolbarMinHeight = toolbar;
  }
  return (currentToolbarMinHeight as MinHeight).minHeight;
}
