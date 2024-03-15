import { Stack, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import NewPasswordForm from "../../sections/auth/NewPasswordForm";
import { CaretLeft } from "phosphor-react";

function NewPassword() {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Reset Password?
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Please set your new password
        </Typography>

        <NewPasswordForm />

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
    </>
  );
}

export default NewPassword;
