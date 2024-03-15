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

import Message from "./Conversation/Message";
import { LinkMsg, DocMsg } from "./Conversation/MsgTypes";
import { SHARED_DOCS, SHARED_LINKS } from "../data";

function StarredMessage() {
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

            <Typography>Starred Message</Typography>
          </Stack>
        </Box>

        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflow: "scroll",
          }}
          p={3}
          spacing={3}
        >
          <Message menu={false} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default StarredMessage;
