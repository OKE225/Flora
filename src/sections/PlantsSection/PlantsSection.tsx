import React, { Component } from "react";
import "./PlantsSection.scss";
import { Box } from "@mui/material";
import { AnimatedBackground } from "../../components/AnimatedBackground/AnimatedBackground.tsx";
import { FloraImage } from "../../components/FloraImage/FloraImage.tsx";

import plantsTop from "../../assets/images/plants/plants_transparent_top.png";
import plant1 from "../../assets/images/plants/plant_transparent_1.png";
import plant2 from "../../assets/images/plants/plant_transparent_2.png";
import plant3 from "../../assets/images/plants/plant_transparent_3.png";
import plant4 from "../../assets/images/plants/plant_transparent_4.png";
import plant5 from "../../assets/images/plants/plant_transparent_5.png";
import plant6 from "../../assets/images/plants/plant_transparent_6.png";

export class PlantsSection extends Component {
  render() {
    return (
      <AnimatedBackground
        colors={{
          baseColor: "#17861c",
          midtoneColor: "#169658",
          lowlightColor: "#357d01",
          highlightColor: "#64b003",
        }}>
        <Box
          className="plants-section"
          sx={{
            height: "100%",
          }}>
          <FloraImage
            source={plantsTop}
            width="100%"
            margin="-20% 0 0 0"
            zIndex={100}
          />
          <div className="left-side">
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
          </div>
          <div className="right-side">
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
          </div>
        </Box>
      </AnimatedBackground>
    );
  }
}
