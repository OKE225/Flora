import React from "react";
import { Tilt } from "react-tilt";
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";

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
  profession?: string;
  name?: string;
  lastname?: string;
  photo?: string;
  bio?: string;
};

export const TiltCardEmployee: React.FC<Props> = (props) => {
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
            color: "#e9ecef",
            boxShadow: `0px 0px 20px -5px ${props.borderColor}`,
          }}>
          <CardContent
            sx={{
              padding: "24px",
              textAlign: "center",
            }}>
            <Typography variant="h6" sx={{ color: "#adb5bd" }}>
              {props.profession}
            </Typography>
            <Avatar
              src={props.photo}
              alt={`${props.name} ${props.lastname}`}
              sx={{
                width: "160px",
                height: "160px",
                margin: "30px auto 15px auto",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                background:
                  "linear-gradient(to right, #ffbe0b 0%, #fb5607 33%,  #ff006e 66%, #9454ef 100%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              gutterBottom>
              <b>{props.name}</b> {props.lastname}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#f8f9fa",
                textAlign: "justify",
              }}>
              {props.bio}
            </Typography>
          </CardContent>
        </Card>
      </Tilt>
    </Box>
  );
};
