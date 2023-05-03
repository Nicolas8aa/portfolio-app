import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { LinkedIn, GitHub } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarItem: React.FC<{ children: React.ReactNode; path: string }> = ({
  children,
  path,
}) => {
  const router = useRouter();
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (router.pathname === path) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [router.pathname, path]);

  return (
    <Box
      sx={{
        position: "relative",
        "& p": {
          color: active ? "primary.main" : "text.primary",
          transition: "color 0.2s ease-in-out",
          "&::before, &::after": {
            opacity: active ? 1 : 0,
            content: '""',
            position: "absolute",
            transition: "opacity 0.2s ease-in-out, color 0.2s ease-in-out",
            color: "primary.main",
          },
          "&::before": {
            content: '"<"',
            left: -16,
          },
          "&::after": {
            content: '"/>"',
            right: -20,
          },
          "&:hover": {
            color: "primary.main",
            "&::before, &::after": {
              opacity: 1,
            },
          },
        },
      }}
    >
      <Link href={path}>
        <Typography
          // variant="h6"
          sx={{
            // fontSize: "1.2rem",
            alignSelf: "center",
          }}
        >
          {children}
        </Typography>
      </Link>
    </Box>
  );
};

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
          "& a": { width: "max-content" },
          fontSize: "1.4rem",
          alignSelf: "center",
        }}
      >
        <Link href="/">
          Nicolas <span>Cuellar</span>
        </Link>
      </Typography>
      <Stack direction="row" spacing={7}>
        <NavbarItem path="/about">About</NavbarItem>
        <NavbarItem path="/projects">Projects</NavbarItem>
        {/* <NavbarItem>Contact</NavbarItem> */}
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
