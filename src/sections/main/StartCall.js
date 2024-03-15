import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import { forwardRef } from "react";
import { CallElement } from "../../components/CallElement";

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { MEMBERS_LIST } from "../../data";
import { MagnifyingGlass } from "phosphor-react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function StartCall({ open, handleClose }) {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      sx={{ p: 4 }}
      onClose={handleClose}
    >
      {" "}
      <DialogTitle sx={{ mb: 3 }}>Start Call</DialogTitle>
      <DialogContent>
        <Stack spacing={3}>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709ce6" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Stack>

          {MEMBERS_LIST.map((el) => (
            <CallElement {...el} />
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default StartCall;
