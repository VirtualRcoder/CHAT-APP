import { Container, Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import Logo from "../../assets/Images/logo.ico";
import { useSelector } from "react-redux";

const isAuthenticated = true;

const MainLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  console.log(isLoggedIn);
  // if (!isLoggedIn) {
  //   return <Navigate to={"/auth/login"} />;
  // }
  return (
    <>
      <div>Main Layout</div>

      <Outlet />
    </>
  );
};

export default MainLayout;
