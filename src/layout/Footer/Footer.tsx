import React from "react";
import { Box, Typography, Link } from "@mui/material";
import "./Footer.scss";
import { FaDiscord } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { SiMonkeytype } from "react-icons/si";
import { FaCodepen } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
        color="white">
        <Typography variant="h6">
          <span className="footer-subtext">Copyright © 2025 by</span> oke_225
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
            sx={{
              display: "flex",
              alignItems: "center",
              mr: 3,
              fontSize: 24,
              transition: "all 0.2s ease-in-out",
            }}>
            <FaDiscord />
          </Link>
          <Link
            href="https://github.com/OKE225"
            color="inherit"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              mr: 3,
              fontSize: 24,
              transition: "all 0.2s ease-in-out",
            }}>
            <TbBrandGithubFilled />
          </Link>
          <Link
            href="https://monkeytype.com/profile/oke225"
            color="inherit"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              mr: 3,
              fontSize: 24,
              transition: "all 0.2s ease-in-out",
            }}>
            <SiMonkeytype />
          </Link>
          <Link
            href="https://codepen.io/OKE225"
            color="inherit"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              mr: 3,
              fontSize: 24,
              transition: "all 0.2s ease-in-out",
            }}>
            <FaCodepen />
          </Link>
        </Box>
      </Box>
    </footer>
  );
};
