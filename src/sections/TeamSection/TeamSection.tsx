import React from "react";
import { AnimatedBackground } from "../../components/AnimatedBackground/AnimatedBackground.tsx";

type Props = {
  baseColor: string;
  midtoneColor: string;
  lowlightColor: string;
  highlightColor: string;
  children: React.ReactNode;
};

export const TeamSection: React.FC<Props> = ({
  baseColor,
  midtoneColor,
  lowlightColor,
  highlightColor,
  children,
}) => {
  return (
    <AnimatedBackground
      colors={{
        baseColor: baseColor,
        midtoneColor: midtoneColor,
        lowlightColor: lowlightColor,
        highlightColor: highlightColor,
      }}
      clipPath="polygon(0 0, 100% 2.75%, 100% 100%, 0 100%)">
      {children}
    </AnimatedBackground>
  );
};
