import { Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import LoginForm from "../../sections/auth/LoginForm";
import AuthSocial from "../../sections/auth/AuthSocial";

function Login() {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Login to Tawk</Typography>
        <Stack spacing={0.5} direction={"row"}>
          <Typography variant="body2">New User?</Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">
            Create an account
          </Link>
        </Stack>
        {/*Login Form */}
        <LoginForm />
        {/*Auth Social */}
        <AuthSocial />
      </Stack>
    </>
  );
}

export default Login;
