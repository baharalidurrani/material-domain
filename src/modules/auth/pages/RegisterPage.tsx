import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
// import { isLogin } from "src/app-redux/auth/authSlice";
// import { useAppSelector } from "src/app-redux/hooks";
import { getToken } from "src/common/utils/tokenManager.util";

export function RegisterPage() {
  const history = useHistory();
  // const log = useAppSelector(isLogin);

  return getToken() ? (
    <Redirect to={{ pathname: "/" }} />
  ) : (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          localStorage.setItem("TOKEN", "auth");
          history.push("/");
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
