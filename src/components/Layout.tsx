import { Stack } from "@mui/material";
import React from "react";
import Navbar from "./Navbar/Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Stack sx={{ height: "100vh", bgcolor: "background.default" }}>
      <Navbar />
      {children}
    </Stack>
  );
};

export default Layout;
