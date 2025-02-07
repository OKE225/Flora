import React, { useEffect, useRef } from "react";
import * as THREE from 'three';
import FOG from "vanta/dist/vanta.fog.min";
import "./AnimatedBackground.scss";

type Props ={
  colors: {
    baseColor: string
    midtoneColor: string,
    lowlightColor: string,
    highlightColor: string,
  },
  children: React.ReactNode;
}

export const AnimatedBackground: React.FC<Props> = ({colors, children}) => {
  const ref = useRef(null);

  useEffect(() => {
    if(!ref.current) return;

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
      blurFactor: 0.75,
      speed: 1,
      zoom: 1.5,
    });

    return () => {
      if(vantaEffect) vantaEffect.destroy();
    };
  }, [colors]);

  return <div className="vanta-animation-background" ref={ref}>
    {children}
  </div>;
};
