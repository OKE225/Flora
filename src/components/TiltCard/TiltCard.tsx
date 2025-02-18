import React from "react";
import { Tilt } from "react-tilt";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

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
  borderColor: string;
  image: string;
  title: string;
  desc: string;
};

export const TiltCard: React.FC<Props> = (props) => {
  return (
    <Box
      className="card"
      sx={{
        width: "350px",
      }}>
      <Tilt options={tiltDefaultOptions}>
        <Card
          sx={{
            background: `${props.cardColor}`,
            color: "white",
            boxShadow: `0px 0px 20px -5px ${props.borderColor}`,
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
    </Box>
  );
};
