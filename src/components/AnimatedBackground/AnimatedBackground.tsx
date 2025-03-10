import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import { Box } from "@mui/material";

type Props = {
  colors: {
    baseColor: string;
    midtoneColor: string;
    lowlightColor: string;
    highlightColor: string;
  };
  clipPath: string;
  children: React.ReactNode;
};

export const AnimatedBackground: React.FC<Props> = ({
  colors,
  clipPath,
  children,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const vantaEffect = FOG({
      el: ref.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      baseColor: colors.baseColor,
      midtoneColor: colors.midtoneColor,
      lowlightColor: colors.lowlightColor,
      highlightColor: colors.highlightColor,
      blurFactor: 0.55,
      speed: 2,
      zoom: 1.5,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [colors]);

  return (
    <Box
      className="vanta-animation-background"
      ref={ref}
      sx={{
        width: "100%",
        minHeight: {
          xs: "140vh",
          sm: "140vh",
          md: "130vh",
          lg: "130vh",
          xl: "130vh",
        },
        height: "auto",
        overflow: "hidden",
        clipPath: clipPath,
        marginTop: {
          xs: "-8vh",
          sm: "-8vh",
          md: "-7vh",
          lg: "-7vh",
          xl: "-7vh",
        },
      }}>
      {children}
    </Box>
  );
};
