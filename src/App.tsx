import React from "react";
import { PlantsSection } from "./sections/PlantsSection/PlantsSection.tsx";
import { FlowersSection } from "./sections/FlowersSection/FlowersSection.tsx";
import { Navigation } from "./layout/Navigation/Navigation.tsx";
import { Footer } from "./layout/Footer/Footer.tsx";
import { TeamSection } from "./sections/TeamSection/TeamSection.tsx";
import { Box, Typography } from "@mui/material";
import { TiltCard } from "./components/TiltCard/TiltCard.tsx";
import { FloraImage } from "./components/FloraImage/FloraImage.tsx";

import flowerRedTransparent1 from "./assets/images/red_flowers/flower_transparent_1.png";
import flowerRedTransparent2 from "./assets/images/red_flowers/flower_transparent_2.png";
import flowerRedTransparent3 from "./assets/images/red_flowers/flower_transparent_3.png";
import flowerRedTransparent4 from "./assets/images/red_flowers/flower_transparent_4.png";
import flowerRedTransparent5 from "./assets/images/red_flowers/flower_transparent_5.png";
import flowerRed1 from "./assets/images/red_flowers/flower1.jpeg";
import flowerRed2 from "./assets/images/red_flowers/flower2.jpeg";
import flowerRed3 from "./assets/images/red_flowers/flower3.jpg";

import flowerBlueTransparent1 from "./assets/images/blue_flowers/flower_transparent_1.png";
import flowerBlueTransparent2 from "./assets/images/blue_flowers/flower_transparent_2.png";
import flowerBlueTransparent3 from "./assets/images/blue_flowers/flower_transparent_3.png";
import flowerBlueTransparent4 from "./assets/images/blue_flowers/flower_transparent_4.png";
import flowerBlueTransparent5 from "./assets/images/blue_flowers/flower_transparent_5.png";
import flowerBlueTransparent6 from "./assets/images/blue_flowers/flower_transparent_6.png";
import flowerBlue1 from "./assets/images/blue_flowers/flower1.jpeg";
import flowerBlue2 from "./assets/images/blue_flowers/flower2.jpeg";
import flowerBlue3 from "./assets/images/blue_flowers/flower3.jpeg";

import flowerYellowTransparent1 from "./assets/images/yellow_flowers/flower_transparent_1.png";
import flowerYellowTransparent2 from "./assets/images/yellow_flowers/flower_transparent_2.png";
import flowerYellowTransparent3 from "./assets/images/yellow_flowers/flower_transparent_3.png";
import flowerYellowTransparent4 from "./assets/images/yellow_flowers/flower_transparent_4.png";
import flowerYellowTransparent5 from "./assets/images/yellow_flowers/flower_transparent_5.png";
import flowerYellowTransparent6 from "./assets/images/yellow_flowers/flower_transparent_6.png";
import flowerYellowTransparent7 from "./assets/images/yellow_flowers/flower_transparent_7.png";
import flowerYellow1 from "./assets/images/yellow_flowers/flower1.png";
import flowerYellow2 from "./assets/images/yellow_flowers/flower2.png";
import flowerYellow3 from "./assets/images/yellow_flowers/flower3.jpg";

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
          <Box sx={{ width: "60%", margin: "0 auto" }}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                textAlign: "center",
              }}
              gutterBottom>
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
              cardColor="#a4161a"
              borderColor="#660708"
              image={flowerRed1}
              title="lorem ipsum"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            eleifend."
            />
            <TiltCard
              cardColor="#a4161a"
              borderColor="#660708"
              image={flowerRed2}
              title="lorem ipsum"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          eleifend."
            />
            <TiltCard
              cardColor="#a4161a"
              borderColor="#660708"
              image={flowerRed3}
              title="lorem ipsum"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          eleifend."
            />
          </Box>
        </Box>
        <Box className="left-side">
          <FloraImage
            source={flowerRedTransparent1}
            width="325px"
            posBottom="550px"
            posLeft="-110px"
            rotateDeg="60deg"
            zIndex={-1}
          />
          <FloraImage
            source={flowerRedTransparent2}
            width="300px"
            posBottom="-220px"
            posLeft="10px"
            rotateDeg="5deg"
            zIndex={-1}
          />
        </Box>
        <Box className="right-side">
          <FloraImage
            source={flowerRedTransparent5}
            width="250px"
            posBottom="-100px"
            posRight="650px"
            rotateDeg="-30deg"
            zIndex={-1}
          />
          <FloraImage
            source={flowerRedTransparent4}
            width="500px"
            posBottom="-50px"
            posRight="-180px"
            rotateDeg="9deg"
            zIndex={-1}
          />
          <FloraImage
            source={flowerRedTransparent3}
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
        highlightColor="#0351C1">
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
          <Box sx={{ width: "60%", margin: "0 auto" }}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                textAlign: "center",
              }}
              gutterBottom>
              HYACINTH
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
              cardColor="#002855"
              borderColor="#023e8a"
              image={flowerBlue1}
              title="lorem ipsum"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          eleifend."
            />
            <TiltCard
              cardColor="#002855"
              borderColor="#023e8a"
              image={flowerBlue2}
              title="lorem ipsum"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        eleifend."
            />
            <TiltCard
              cardColor="#002855"
              borderColor="#023e8a"
              image={flowerBlue3}
              title="lorem ipsum"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        eleifend."
            />
          </Box>
        </Box>
        <Box className="left-side">
          <FloraImage
            source={flowerBlueTransparent1}
            width="325px"
            posBottom="650px"
            posLeft="-140px"
            rotateDeg="65deg"
            zIndex={-1}
          />
          <FloraImage
            source={flowerBlueTransparent6}
            width="440px"
            posBottom="100px"
            posLeft="-150px"
            rotateDeg="10deg"
            zIndex={-1}
          />
          <FloraImage
            source={flowerBlueTransparent2}
            width="300px"
            posBottom="-180px"
            posLeft="240px"
            rotateDeg="5deg"
            zIndex={-1}
          />
        </Box>
        <Box className="right-side">
          <FloraImage
            source={flowerBlueTransparent3}
            width="600px"
            posBottom="-100px"
            posRight="120px"
            rotateDeg="-35deg"
            zIndex={-1}
          />
          <FloraImage
            source={flowerBlueTransparent4}
            width="420px"
            posBottom="350px"
            posRight="-180px"
            rotateDeg="-35deg"
            zIndex={-1}
          />
          <FloraImage
            source={flowerBlueTransparent5}
            width="220px"
            posBottom="850px"
            posRight="-100px"
            rotateDeg="45deg"
            zIndex={-1}
          />
        </Box>
      </FlowersSection>
      <FlowersSection
        baseColor="#ded300"
        midtoneColor="#d2bd00"
        lowlightColor="#c5a700"
        highlightColor="#cca400">
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
          <Box sx={{ width: "60%", margin: "0 auto" }}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                textAlign: "center",
              }}
              gutterBottom>
              SUNFLOWER
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
              cardColor="#cca000"
              borderColor="#76520e"
              image={flowerYellow1}
              title="lorem ipsum"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
      eleifend."
            />
            <TiltCard
              cardColor="#cca000"
              borderColor="#76520e"
              image={flowerYellow2}
              title="lorem ipsum"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
    eleifend."
            />
            <TiltCard
              cardColor="#cca000"
              borderColor="#76520e"
              image={flowerYellow3}
              title="lorem ipsum"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
    eleifend."
            />
          </Box>
        </Box>
        <Box className="left-side">
          <FloraImage
            source={flowerYellowTransparent7}
            width="225px"
            posBottom="750px"
            posLeft="-110px"
            rotateDeg="0deg"
            zIndex={-1}
          />
          <FloraImage
            source={flowerYellowTransparent3}
            width="400px"
            posBottom="50px"
            posLeft="-160px"
            rotateDeg="45deg"
            zIndex={-1}
          />
          <FloraImage
            source={flowerYellowTransparent6}
            width="550px"
            posBottom="-275px"
            posLeft="45px"
            rotateDeg="20deg"
            zIndex={-1}
          />
          <FloraImage
            source={flowerYellowTransparent4}
            width="220px"
            posBottom="-110px"
            posLeft="750px"
            rotateDeg="0deg"
            zIndex={-1}
          />
        </Box>
        <Box className="right-side">
          <FloraImage
            source={flowerYellowTransparent5}
            width="500px"
            posBottom="-70px"
            posRight="0px"
            rotateDeg="0deg"
            zIndex={-1}
          />
          <FloraImage
            source={flowerYellowTransparent2}
            width="400px"
            posBottom="375px"
            posRight="-165px"
            rotateDeg="-40deg"
            zIndex={-1}
          />
          <FloraImage
            source={flowerYellowTransparent1}
            width="125px"
            posBottom="860px"
            posRight="-70px"
            rotateDeg="0deg"
            zIndex={-1}
          />
        </Box>
      </FlowersSection>
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
