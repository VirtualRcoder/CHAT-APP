import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";

import { Link as RouterLink } from "react-router-dom";
import ResetPasswordForm from "../../sections/auth/ResetPasswordForm";

function ResetPassword() {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h3" paragraph>
        Forgot your Password?
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 5 }}>
        Please enter the email address associated with your account
      </Typography>

      {/*Reset Password Form*/}

      <ResetPasswordForm />

      <Link
        component={RouterLink}
        to="/auth/login"
        color="inherit"
        variant="subtitle2"
        sx={{ mt: 3, mx: "auto", alignItems: "center", display: "inline" }}
      >
        <CaretLeft />
        Return to sign in
      </Link>
    </Stack>
  );
}

export default ResetPassword;
