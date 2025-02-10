import React from "react";
import { Tilt } from "react-tilt";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const tiltDefaultOptions = {
  reverse: false,
  max: 25,
  perspective: 1000,
  scale: 1.05,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

type Props = {
  cardColor: string;
  image: string;
  title: string;
  desc: string;
};

export const TiltCard: React.FC<Props> = (props) => {
  return (
    <Tilt options={tiltDefaultOptions}>
      <Card
        sx={{
          width: "350px",
          background: `${props.cardColor}`,
          color: "white",
          boxShadow: "5px 5px 0px 0px rgb(116, 207, 70)",
        }}>
        <CardMedia image={props.image} sx={{ height: 250 }} />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="body1" sx={{ color: "#ececec" }}>
            {props.desc}
          </Typography>
        </CardContent>
      </Card>
    </Tilt>
  );
};
