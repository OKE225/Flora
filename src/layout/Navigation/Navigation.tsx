import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { FaDiscord } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

export const Navigation = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        top: "0",
        zIndex: "1000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        padding: "1%",
      }}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        <Link href="#" color="inherit" underline="none">
          FLORA
        </Link>
      </Typography>
      <Box sx={{ fontSize: "24px" }}>
        <Link
          href="https://discord.com/users/676854872678858771"
          color="inherit"
          underline="none"
          sx={{ mr: 2 }}>
          <FaDiscord />
        </Link>
        <Link href="https://github.com/OKE225" color="inherit" underline="none">
          <TbBrandGithubFilled />
        </Link>
      </Box>
    </Box>
  );
};
