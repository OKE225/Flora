import { Box } from "@mui/material";
import React from "react";

type Props = {
  source: string;
  width?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  posRight?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  posLeft?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  posTop?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  posBottom?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  zIndex: number;
  rotateDeg?: string;
};

export const FloraImage: React.FC<Props> = ({
  posRight,
  posLeft,
  posTop,
  posBottom,
  width,
  source,
  zIndex,
  rotateDeg,
}) => {
  return (
    <Box
      sx={{
        position: "fixed",
        userSelect: "none",
        width: width,
        right: posRight,
        left: posLeft,
        top: posTop,
        bottom: posBottom,
        zIndex: zIndex,
        rotate: rotateDeg,
        overflow: "hidden",
      }}>
      <img
        src={source}
        className="flora-image"
        alt="Plant transparent"
        draggable={false}
        style={{
          userSelect: "none",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      />
    </Box>
  );
};
