import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { socket, connectSocket } from "../../socket";
import { useEffect } from "react";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const user_id = window.localStorage.user_id;
  // const { user_id } = useSelector((state) => state.auth);
  const { isLoggedIn } = useSelector((state) => state.auth);
  // console.log(isLoggedIn);
  // console.log(user_id);

  useEffect(() => {
    if (isLoggedIn) {
      window.onload = function () {
        if (!window.location.hash) {
          window.location = window.location + "#loaded";
          window.location.reload();
        }
      };

      window.onload();

      if (!socket) {
        connectSocket(user_id);
      }

      socket.on("new_friend_request", (data) => {
        alert("oh yeah");
      });

      socket.on("request_accepted", (data) => {
        // dispatch(
        //   showSnackbar({
        //     severity: "success",
        //     message: "Friend Request Accepted",
        //   })
        // );
      });
    }
    return () => {
      socket?.off("new_friend_request");
      socket?.off("request_accepted");
      socket?.off("request_sent");
      socket?.off("start_chat");
      socket?.off("new_message");
      socket?.off("audio_call_notification");
    };
  }, [isLoggedIn, socket]);

  return (
    <Stack direction={"row"} height={"100%"}>
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
