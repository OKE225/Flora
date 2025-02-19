import React from "react";

type Props = {
  source: string;
  width?: string;
  height?: string;
  posRight?: string;
  posLeft?: string;
  posTop?: string;
  posBottom?: string;
  zIndex?: number;
  margin?: string;
  rotateDeg?: string;
};

export const FloraImage: React.FC<Props> = ({
  posRight,
  posLeft,
  posTop,
  posBottom,
  width,
  height,
  source,
  zIndex,
  margin,
  rotateDeg,
}) => {
  return (
    <img
      src={source}
      className="flora-image"
      alt="Plant transparent"
      draggable={false}
      style={{
        position: "absolute",
        userSelect: "none",
        width: width,
        height: height,
        right: posRight,
        left: posLeft,
        top: posTop,
        bottom: posBottom,
        margin: margin,
        zIndex: zIndex,
        rotate: rotateDeg,
      }}
    />
  );
};
