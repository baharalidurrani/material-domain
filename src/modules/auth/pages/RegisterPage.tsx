import React from "react";
import { Link, Navigate, useLocation, Location, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
// import { isLogin } from "src/app-redux/auth/authSlice";
// import { useAppSelector } from "src/app-redux/hooks";
import { getToken } from "src/common/utils/tokenManager.util";

export function RegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { from?: Location };
  const from = state?.from?.pathname || "/";
  // const log = useAppSelector(isLogin);

  return getToken() ? (
    <Navigate to={from} replace />
  ) : (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          localStorage.setItem("TOKEN", "auth");
          navigate(from, { replace: true });
        }}
      >
        Register
      </Button>
      <Button component={Link} to="/auth/login">
        Go to Login
      </Button>
    </>
  );
}
