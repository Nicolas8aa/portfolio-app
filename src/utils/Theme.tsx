import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
