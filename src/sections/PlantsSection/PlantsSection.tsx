import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import { AnimatedBackground } from "../../components/AnimatedBackground/AnimatedBackground.tsx";
import { FloraImage } from "../../components/FloraImage/FloraImage.tsx";
import { TiltCard } from "../../components/TiltCard/TiltCard.tsx";

import plantsTop from "../../assets/images/plants/plants_transparent_top.png";
import plant1 from "../../assets/images/plants/plant_transparent_1.png";
import plant2 from "../../assets/images/plants/plant_transparent_2.png";
import plant3 from "../../assets/images/plants/plant_transparent_3.png";
import plant4 from "../../assets/images/plants/plant_transparent_4.png";
import plant5 from "../../assets/images/plants/plant_transparent_5.png";
import plant6 from "../../assets/images/plants/plant_transparent_6.png";

import plantImage from "../../assets/images/plants/plant2.jpeg";

export class PlantsSection extends Component {
  render() {
    return (
      <AnimatedBackground
        colors={{
          baseColor: "#17861c",
          midtoneColor: "#169658",
          lowlightColor: "#357d01",
          highlightColor: "#64b003",
        }}
        clipPath="polygon(0 0, 100% 0%, 100% 95%, 0% 100%)"
        marginTop="0">
        <Box
          className="plants-section"
          sx={{
            height: "inherit",
            overflow: "hidden",
            position: "relative",
          }}>
          <FloraImage
            source={plantsTop}
            width="100%"
            posTop="-42.5%"
            zIndex={100}
          />
          <Box
            className="content-container"
            sx={{ height: "100vh", position: "absolute" }}>
            <Box
              className="content"
              sx={{
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "99",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                width: "60%",
                height: "100vh",
              }}>
              <Box
                className="typography-section"
                mr={20}
                sx={{
                  color: "white",
                }}>
                <Typography variant="h1" gutterBottom>
                  <b>FLORA</b> Plants and Flowers
                </Typography>
                <Typography variant="body1" sx={{ color: "#ececec" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  diam eros, dignissim et augue fermentum, fringilla feugiat
                  libero. Pellentesque tincidunt facilisis tortor, vitae maximus
                  nunc. Cras luctus augue in justo posuere faucibus. Duis odio
                  magna, luctus id bibendum nec, interdum in mauris. Sed eget
                  quam sed diam euismod mattis. In hac habitasse platea
                  dictumst. Cras eu odio mi. Sed tristique venenatis enim vel
                  elementum.
                </Typography>
              </Box>
              <Box className="card" display="block">
                <TiltCard
                  cardColor="#31572c"
                  borderColor="#132a13"
                  image={plantImage}
                  title="Solar Project"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            eleifend."
                />
              </Box>
            </Box>
          </Box>
          <Box className="left-side">
            <FloraImage
              source={plant1}
              width="600px"
              posBottom="-50px"
              posLeft="-100px"
              rotateDeg="11deg"
              zIndex={-1}
            />
            <FloraImage
              source={plant5}
              width="350px"
              posBottom="-120px"
              posLeft="150px"
              zIndex={-3}
            />
            <FloraImage
              source={plant2}
              width="300px"
              posBottom="-60px"
              posLeft="350px"
              rotateDeg="10deg"
              zIndex={-2}
            />
          </Box>
          <Box className="right-side">
            <FloraImage
              source={plant6}
              width="420px"
              posBottom="-40px"
              posRight="260px"
              rotateDeg="-8.45deg"
              zIndex={-2}
            />
            <FloraImage
              source={plant4}
              width="500px"
              posBottom="-100px"
              posRight="-60px"
              rotateDeg="-21deg"
              zIndex={-1}
            />
            <FloraImage
              source={plant3}
              width="375px"
              posBottom="150px"
              posRight="-120px"
              rotateDeg="-27deg"
              zIndex={-2}
            />
          </Box>
        </Box>
      </AnimatedBackground>
    );
  }
}
