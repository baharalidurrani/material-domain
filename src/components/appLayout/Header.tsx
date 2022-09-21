import { Link, useLocation } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Grid, Zoom } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from 'tss-react/mui';
import { logOutAction } from 'src/app-redux/auth/actions/authActions';
import { isLogin } from 'src/app-redux/auth/authSlice';
import { useAppDispatch, useAppSelector } from 'src/app-redux/hooks';
import { themeTypeAction, toggleMobileDrawerAction } from 'src/app-redux/settings/settingsSlice';
import { ROUTES } from 'src/routes/routes';
import { DRAWER_WIDTH } from './SideNav';

const useStyles = makeStyles()((theme) => ({
  appBar: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
}));

export function Header() {
  console.log('Header Rerendered');

  const dispatch = useAppDispatch();
  const TOKEN = useAppSelector(isLogin);
  const { classes } = useStyles();
  const trigger = useScrollTrigger();

  const location = useLocation();
  const module = ROUTES.filter((r) => r.path === location.pathname.split('/')[1])[0];

  const isDarkTheme = useTheme().palette.mode === 'dark';
  const toggleTheme = () => {
    dispatch(themeTypeAction(isDarkTheme ? 'light' : 'dark'));
  };

  function handleLogout() {
    void dispatch(logOutAction());
  }

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => dispatch(toggleMobileDrawerAction())}
                className={classes.menuButton}
                size="large"
              >
                <MenuIcon />
              </IconButton>
              <Button
                className={classes.title}
                startIcon={module?.icon && <module.icon />}
                component={Link}
                to={'/' + module?.path}
              >
                {module?.title}
              </Button>
            </Box>
            <Grid>
              <Tooltip title="Source Code">
                <IconButton
                  href="https://github.com/baharalidurrani/material-domain"
                  aria-label="Link to Bahar's GitHub"
                  target="_blank"
                  color="inherit"
                  rel="noopener"
                  size="large"
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Toggle Light/Dark Theme">
                <IconButton
                  color="inherit"
                  onClick={toggleTheme}
                  aria-label="Switch between Light and Dark Theme"
                  size="large"
                >
                  {isDarkTheme ? <BrightnessHighIcon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>
              {TOKEN && (
                <Zoom in>
                  <Tooltip title="Log Out">
                    <IconButton color="inherit" onClick={handleLogout} aria-label="Log Out Button" size="large">
                      <LogoutIcon />
                    </IconButton>
                  </Tooltip>
                </Zoom>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
