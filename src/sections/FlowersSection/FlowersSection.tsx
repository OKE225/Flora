import React from "react";
import { AnimatedBackground } from "../../components/AnimatedBackground/AnimatedBackground.tsx";

export const FlowersSection = () => {
  return (
    <AnimatedBackground
      colors={{
        baseColor: "#922D25",
        midtoneColor: "#E20338",
        lowlightColor: "#EE3D48",
        highlightColor: "#B40A1B",
      }}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        consequatur eos impedit repudiandae ullam esse rem eaque ea! Vel, atque
        molestiae vitae aut quidem dolor quam quod ex suscipit vero?
      </p>
    </AnimatedBackground>
  );
};
