import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { CaretLeft, X } from "phosphor-react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { faker } from "@faker-js/faker";

import { LinkMsg, DocMsg } from "./Conversation/MsgTypes";
import { SHARED_DOCS, SHARED_LINKS } from "../data";

function SharedMessage() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.23)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "f8faff"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", 0: 2 }}
            direction={"row"}
            alignItems={"center"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>

            <Typography>Shared Message</Typography>
          </Stack>
        </Box>

        <Tabs
          sx={{ px: 2, pt: 2 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>

        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflow: "scroll",
          }}
          p={3}
          spacing={value === 1 ? 1 : 3}
        >
          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid container spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6].map((el) => {
                      return (
                        <Grid item xs={4}>
                          <img
                            src={faker.image.avatar()}
                            alt={faker.name.fullName()}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                );

              case 1:
                return SHARED_LINKS.map((el) => {
                  return <LinkMsg el={el} />;
                });

              case 2:
                return SHARED_DOCS.map((el) => {
                  return <DocMsg el={el} />;
                });
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
}

export default SharedMessage;
