import { useEffect, useRef } from 'react';
import { Link as RLink, type Location, useLocation, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { loginAction } from 'src/app-redux/auth/actions/authActions';
import { selectStatus } from 'src/app-redux/auth/authSlice';
import { useAppDispatch, useAppSelector } from 'src/app-redux/hooks';

export function LoginPage() {
  console.log('LoginPage Rendered');
  const authStatus = useAppSelector(selectStatus);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), []);

  const state = location.state as { from?: Location };
  const from = state?.from?.pathname ?? '/';

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();

    if (email && password) {
      await dispatch(loginAction({ email, password }));
      navigate(from, { replace: true });
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {authStatus === 'failed' && 'Unable to authenticate'}
          <LoadingButton loading={authStatus === 'loading'} type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Sign In
          </LoadingButton>
          <Grid container sx={{ mt: 3, mb: 6 }}>
            <Grid item xs>
              <Link variant="body2" component={RLink} to="/auth/forgot">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link variant="body2" component={RLink} to="/auth/register">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box m={6} ref={bottomRef} />
    </Container>
  );
}
