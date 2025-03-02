import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const LoadingScreen = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          background: "#212121",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "10000000",
          overflow: "hidden",
        }}>
        <CircularProgress
          size="5em"
          sx={{ color: "white", marginBottom: "50px" }}
        />
        <Typography variant="h5" sx={{ color: "white" }}>
          Loading...
        </Typography>
      </Box>
    </>
  );
};

export default LoadingScreen;
