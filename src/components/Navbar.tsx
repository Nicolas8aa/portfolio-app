import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { LinkedIn, GitHub } from "@mui/icons-material";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        p: 2,
        width: "80%",
        mx: "auto",
        "&>div": { alignItems: "center" },
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          "&> span": { fontWeight: "bold" },
          fontSize: "1.4rem",
          alignSelf: "center",
        }}
      >
        Nicolas <span>Cuellar</span>
      </Typography>
      <Stack direction="row" spacing={3}>
        <Typography>About</Typography>
        <Typography>Projects</Typography>
        <Typography>Contact</Typography>
      </Stack>
      <Stack direction="row">
        <IconButton
          color="secondary"
          href="https://www.linkedin.com/in/nicolas-cuellar-ochoa/"
          target="_blank"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          color="secondary"
          href="https://github.com/Nicolas8aa"
          target="_blank"
        >
          <GitHub />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
