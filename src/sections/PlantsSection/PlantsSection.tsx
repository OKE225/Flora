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
        clipPath="polygon(0 0, 100% 0%, 100% 95%, 0% 100%)">
        <Box
          className="plants-section"
          sx={{
            height: "auto",
            minHeight: {
              xs: "140vh",
              sm: "140vh",
              md: "120vh",
              lg: "120vh",
              xl: "120vh",
            },
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            mt: "10vh",
          }}>
          <Box
            className="content-container"
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
            }}>
            <Box
              className="typography-section"
              sx={{
                color: "white",
                mr: {
                  xs: 0,
                  sm: 0,
                  md: 6,
                  lg: 8,
                  xl: 10,
                },
                width: {
                  xs: "95%",
                  sm: "90%",
                  md: "55%",
                  lg: "45%",
                  xl: "40%",
                },
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                  xl: "start",
                },
                "@media (min-width: 1920px)": {
                  maxWidth: "calc(1920px * 0.40)",
                },
              }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: 52,
                    sm: 84,
                    md: 76,
                    lg: 84,
                    xl: 95,
                  },
                }}
                gutterBottom>
                <b>FLORA</b> Plants and Flowers
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#ececec",
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "start",
                    lg: "start",
                    xl: "start",
                  },
                }}>
                The <b>Green Life Project</b> invites you to discover the beauty
                of nature through our unique plants. This initiative is part of
                a broader movement to promote sustainability and environmental
                conservation, similar to other projects around the world that
                focus on restoring ecosystems and promoting biodiversity. Our
                project highlights the importance of plants in enhancing both
                aesthetic appeal and ecological balance.{" "}
                <Box
                  component="span"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "none",
                      lg: "none",
                      xl: "inline",
                    },
                  }}>
                  By selecting species that are not only visually striking but
                  also beneficial for the environment, we aim to create spaces
                  that are both beautiful and sustainable. Whether it's through
                  the use of plants for air purification, soil stabilization, or
                  simply as a source of natural beauty, our goal is to inspire a
                  deeper connection with nature and foster a greener future for
                  all.
                </Box>
              </Typography>
            </Box>
            <Box
              className="card"
              display="block"
              sx={{
                mt: {
                  xs: 5,
                  sm: 5,
                  md: 0,
                  lg: 0,
                  xl: 0,
                },
              }}>
              <TiltCard
                cardColor="#31572c"
                borderColor="#132a13"
                image={plantImage}
                title="Green Life Project"
                desc="Discover the beauty of nature with our unique plants."
              />
            </Box>
          </Box>
          <Box className="flora-image-section">
            <FloraImage
              source={plantsTop}
              width="100%"
              posTop="-25vw"
              zIndex={100}
            />
            <FloraImage
              source={plant1}
              width="25%"
              posBottom="-5%"
              posLeft="-5%"
              rotateDeg="11deg"
              zIndex={-1}
            />
            <FloraImage
              source={plant5}
              width="15%"
              posBottom="-10%"
              posLeft="6.5%"
              zIndex={-3}
            />
            <FloraImage
              source={plant2}
              width="12.5%"
              posBottom="-4%"
              posLeft="17.5%"
              rotateDeg="10deg"
              zIndex={-2}
            />
            <FloraImage
              source={plant6}
              width="17.5%"
              posBottom="-4%"
              posRight="15%"
              rotateDeg="-8.45deg"
              zIndex={-2}
            />
            <FloraImage
              source={plant4}
              width="22.5%"
              posBottom="-6%"
              posRight="-2.5%"
              rotateDeg="-21deg"
              zIndex={-1}
            />
            <FloraImage
              source={plant3}
              width="17.5%"
              posBottom="20%"
              posRight="-4%"
              rotateDeg="-27deg"
              zIndex={-2}
            />
          </Box>
        </Box>
      </AnimatedBackground>
    );
  }
}
