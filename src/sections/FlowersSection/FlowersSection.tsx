import React from "react";
import { AnimatedBackground } from "../../components/AnimatedBackground/AnimatedBackground.tsx";

type Props = {
  baseColor: string,
  midtoneColor: string,
  lowlightColor: string,
  highlightColor: string,
}

export const FlowersSection: React.FC<Props> = ({baseColor, midtoneColor, lowlightColor,highlightColor}) => {
  return (
    <AnimatedBackground
      colors={{
        baseColor: baseColor,
        midtoneColor: midtoneColor,
        lowlightColor: lowlightColor,
        highlightColor: highlightColor,
      }}>
    </AnimatedBackground>
  );
};
