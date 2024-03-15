import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  console.log(isLoggedIn);
  return (
    <Stack direction={"row"} height={"100%"}>
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
