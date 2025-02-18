import React from "react";
import { PlantsSection } from "./sections/PlantsSection/PlantsSection.tsx";
import { FlowersSection } from "./sections/FlowersSection/FlowersSection.tsx";
import { Navigation } from "./layout/Navigation/Navigation.tsx";
import { Footer } from "./layout/Footer/Footer.tsx";
import { TeamSection } from "./sections/TeamSection/TeamSection.tsx";
import { Box, Typography } from "@mui/material";
import { TiltCard } from "./components/TiltCard/TiltCard.tsx";
import { FloraImage } from "./components/FloraImage/FloraImage.tsx";

import flower1 from "./assets/images/red_flowers/flower1.jpeg";
import flower2 from "./assets/images/red_flowers/flower2.jpeg";
import flower4 from "./assets/images/red_flowers/flower4.jpeg";
import flowerTransparent1 from "./assets/images/red_flowers/flower_transparent_1.png";
import flowerTransparent2 from "./assets/images/red_flowers/flower_transparent_2.png";
import flowerTransparent3 from "./assets/images/red_flowers/flower_transparent_3.png";
import flowerTransparent4 from "./assets/images/red_flowers/flower_transparent_4.png";
import flowerTransparent5 from "./assets/images/red_flowers/flower_transparent_5.png";

export const App = () => {
  return (
    <>
      <Navigation />
      <PlantsSection />
      <FlowersSection
        baseColor="#922D25"
        midtoneColor="#E20338"
        lowlightColor="#EE3D48"
        highlightColor="#B40A1B">
        <Box
          sx={{
            position: "relative",
            width: "80%",
            height: "100vh",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: "10",
          }}>
          <Box sx={{ width: "80%", margin: "0 auto" }}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                textAlign: "center",
              }}>
              ROSE
            </Typography>
            <Typography variant="body1" sx={{ color: "#ececec" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos nesciunt harum enim obcaecati a similique culpa esse
              tenetur, magni doloremque praesentium, ullam ipsa repudiandae fuga
              molestiae eum nulla ab consectetur.
            </Typography>
          </Box>
          <Box
            className="cards"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "80px",
            }}>
            <TiltCard
              cardColor="#d32f2f"
              borderColor="#ff3535"
              image={flower1}
              title="lorem ipsum"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            eleifend."
            />
            <TiltCard
              cardColor="#d32f2f"
              borderColor="#ff3535"
              image={flower2}
              title="lorem ipsum"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          eleifend."
            />
            <TiltCard
              cardColor="#d32f2f"
              borderColor="#ff3535"
              image={flower4}
              title="lorem ipsum"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          eleifend."
            />
          </Box>
        </Box>
        <Box className="left-side">
          <FloraImage
            source={flowerTransparent1}
            width="325px"
            posBottom="550px"
            posLeft="-110px"
            rotateDeg="60deg"
            zIndex={-1}
          />
          <FloraImage
            source={flowerTransparent2}
            width="300px"
            posBottom="-220px"
            posLeft="10px"
            rotateDeg="5deg"
            zIndex={-1}
          />
        </Box>
        <Box className="right-side">
          <FloraImage
            source={flowerTransparent5}
            width="250px"
            posBottom="-100px"
            posRight="650px"
            rotateDeg="-30deg"
            zIndex={-1}
          />
          <FloraImage
            source={flowerTransparent4}
            width="500px"
            posBottom="-50px"
            posRight="-180px"
            rotateDeg="9deg"
            zIndex={-1}
          />
          <FloraImage
            source={flowerTransparent3}
            width="220px"
            posBottom="700px"
            posRight="-80px"
            rotateDeg="45deg"
            zIndex={-1}
          />
        </Box>
      </FlowersSection>
      <FlowersSection
        baseColor="#002D6D"
        midtoneColor="#0043A4"
        lowlightColor="#01142F"
        highlightColor="#0351C1"></FlowersSection>
      <FlowersSection
        baseColor="#b89900"
        midtoneColor="#c7b40f"
        lowlightColor="#d3cc00"
        highlightColor="#bbb205"></FlowersSection>
      <TeamSection
        baseColor="#BCBEC0"
        midtoneColor="#E6E7E8"
        lowlightColor="#D1D3D4"
        highlightColor="#939598"
      />
      <Footer />
    </>
  );
};
