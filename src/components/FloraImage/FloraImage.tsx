import React from "react";

type Props = {
  source: string;
  width: string;
  posRight?: string;
  posLeft?: string;
  posTop?: string;
  posBottom?: string;
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
    <img
      src={source}
      className="flora-image"
      alt="Plant transparent"
      draggable={false}
      style={{
        position: "fixed",
        userSelect: "none",
        width: width,
        right: posRight,
        left: posLeft,
        top: posTop,
        bottom: posBottom,
        zIndex: zIndex,
        rotate: rotateDeg,
      }}
    />
  );
};
