import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { FaDiscord } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { SiMonkeytype } from "react-icons/si";
import { FaCodepen } from "react-icons/fa";

export const Footer = () => {
  const linkStyles = {
    display: "flex",
    alignItems: "center",
    mr: 1,
    ml: 1,
    fontSize: {
      xs: 22,
      sm: 26,
      md: 24,
      lg: 24,
      xl: 24,
    },
    transition: "all 0.2s ease-in-out",
    ".icons &:hover": {
      color: "white",
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#212529",
        height: "80px",
        marginTop: "-1px",
        overflow: "hidden",
      }}>
      <Box
        sx={{
          width: {
            xs: "95%",
            sm: "95%",
            md: "80%",
            lg: "80%",
            xl: "80%",
          },
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          "@media (min-width: 1920px)": {
            maxWidth: "calc(1920px * 0.8)",
          },
        }}
        color="white">
        <Typography variant="h6">
          <Box
            component="span"
            className="footer-subtext"
            sx={{ color: "#adb5bd" }}>
            Copyright © 2025 by
          </Box>{" "}
          oke_225
        </Typography>
        <Box
          className="icons"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#adb5bd",
          }}>
          <Link
            href="https://discord.com/users/676854872678858771"
            color="inherit"
            underline="none"
            sx={linkStyles}>
            <FaDiscord />
          </Link>
          <Link
            href="https://github.com/OKE225"
            color="inherit"
            underline="none"
            sx={linkStyles}>
            <TbBrandGithubFilled />
          </Link>
          <Link
            href="https://monkeytype.com/profile/oke225"
            color="inherit"
            underline="none"
            sx={linkStyles}>
            <SiMonkeytype />
          </Link>
          <Link
            href="https://codepen.io/OKE225"
            color="inherit"
            underline="none"
            sx={linkStyles}>
            <FaCodepen />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
