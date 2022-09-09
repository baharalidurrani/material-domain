import { Link, Navigate, useLocation, useNavigate, Location } from 'react-router-dom';
import { Button } from '@mui/material';
// import { isLogin } from "src/app-redux/auth/authSlice";
// import { useAppSelector } from "src/app-redux/hooks";
import { getToken } from 'src/common/utils/tokenManager.util';

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { from?: Location };
  const from = state?.from?.pathname ?? '/';
  // const log = useAppSelector(isLogin);
  return getToken() ? (
    <Navigate to={from} replace />
  ) : (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          localStorage.setItem('TOKEN', 'auth');
          navigate(from, { replace: true });
        }}
      >
        Login
      </Button>
      <Button component={Link} to="/auth/register">
        Go to Register
      </Button>
    </>
  );
}
