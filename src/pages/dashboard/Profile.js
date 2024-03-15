import { useTheme } from "@emotion/react";
import { Stack, Box, IconButton, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import ProfileForm from "../../sections/settings/ProfileForm";

function Profile() {
  const theme = useTheme();
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Left */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#fbfbff"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <IconButton>
                <CaretLeft size={24} color="#4b4b4b" />
              </IconButton>

              <Typography variant="h5">Profile</Typography>
            </Stack>

            {/*FORM */}
            <ProfileForm />
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export default Profile;
