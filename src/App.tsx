import React, { useEffect, useState } from "react";
import { PlantsSection } from "./sections/PlantsSection/PlantsSection.tsx";
import { FlowersSection } from "./sections/FlowersSection/FlowersSection.tsx";
import { Navigation } from "./layout/Navigation/Navigation.tsx";
import { Footer } from "./layout/Footer/Footer.tsx";
import { TeamSection } from "./sections/TeamSection/TeamSection.tsx";
import { Box, Typography } from "@mui/material";
import { TiltCard } from "./components/TiltCard/TiltCard.tsx";
import { FloraImage } from "./components/FloraImage/FloraImage.tsx";
import { TiltCardEmployee } from "./components/TiltCardEmployee/TiltCardEmployee.tsx";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.tsx";

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

import employee1 from "./assets/images/employees/employee1.jpg";
import employee2 from "./assets/images/employees/employee2.jpg";
import employee3 from "./assets/images/employees/employee3.jpg";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
  }, []);

  return (
    <Box sx={{ overflow: isLoading ? "hidden" : "auto" }}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navigation />
          <PlantsSection />
          <FlowersSection
            baseColor="#922D25"
            midtoneColor="#E20338"
            lowlightColor="#EE3D48"
            highlightColor="#B40A1B"
            clipPath="polygon(0 5%, 100% 0%, 100% 95%, 0% 100%)">
            <Box
              sx={{
                position: "relative",
                width: "80%",
                height: "inherit",
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
                  Our red rose projects, including the{" "}
                  <b>Red Rose Initiative</b>, <b>Crimson Bloom Society</b>, and
                  <b> Scarlet Petal Group</b>, embody the timeless allure of
                  roses as symbols of love, passion, and elegance. These flowers
                  ignite romance, attract admiration, and capture hearts with
                  their vibrant colors and captivating scents, serving as a
                  universal language of love for centuries.
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
                  title="Red Rose Initiative"
                  desc="Ignite passion and romance with our stunningly beautiful red roses."
                />
                <TiltCard
                  cardColor="#a4161a"
                  borderColor="#660708"
                  image={flowerRed2}
                  title="Crimson Bloom Society"
                  desc="Attract attention and admiration with our exceptionally vibrant red roses."
                />
                <TiltCard
                  cardColor="#a4161a"
                  borderColor="#660708"
                  image={flowerRed3}
                  title="Scarlet Petal Group"
                  desc="Step into elegance with our stunning red roses."
                />
              </Box>
            </Box>
            <Box className="left-side">
              <FloraImage
                source={flowerRedTransparent1}
                width="15%"
                posBottom="57.5%"
                posLeft="-5%"
                rotateDeg="60deg"
                zIndex={-1}
              />
              <FloraImage
                source={flowerRedTransparent2}
                width="16%"
                posBottom="-25%"
                posLeft="1%"
                rotateDeg="10deg"
                zIndex={-1}
              />
            </Box>
            <Box className="right-side">
              <FloraImage
                source={flowerRedTransparent5}
                width="13%"
                posBottom="-11%"
                posRight="35%"
                rotateDeg="-20deg"
                zIndex={-1}
              />
              <FloraImage
                source={flowerRedTransparent4}
                width="25%"
                posBottom="-5%"
                posRight="-9%"
                rotateDeg="9deg"
                zIndex={-1}
              />
              <FloraImage
                source={flowerRedTransparent3}
                width="11%"
                posBottom="75%"
                posRight="-4%"
                rotateDeg="45deg"
                zIndex={-1}
              />
            </Box>
          </FlowersSection>
          <FlowersSection
            baseColor="#002D6D"
            midtoneColor="#0043A4"
            lowlightColor="#01142F"
            highlightColor="#0351C1"
            clipPath="polygon(0 5%, 100% 0%, 100% 100%, 0 95%)">
            <Box
              sx={{
                position: "relative",
                width: "80%",
                height: "inherit",
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
                  Our blue hyacinth projects, including the{" "}
                  <b>Blue Haven Project</b>, <b>Azure Bloom Initiative</b>, and
                  <b> Cerulean Petal Society</b>, offer a serene escape into the
                  captivating world of blue hyacinths. These flowers symbolize
                  constancy and sincerity, providing a calming presence that
                  invites you to experience tranquility and inner calm, perfect
                  for creating peaceful environments.
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
                  title="Blue Haven Project"
                  desc="Find serenity with our captivating blue hyacinths."
                />
                <TiltCard
                  cardColor="#002855"
                  borderColor="#023e8a"
                  image={flowerBlue2}
                  title="Azure Bloom Initiative"
                  desc="Experience tranquility with our beautiful blue hyacinths."
                />
                <TiltCard
                  cardColor="#002855"
                  borderColor="#023e8a"
                  image={flowerBlue3}
                  title="Cerulean Petal Society"
                  desc="Indulge in the charm of our vibrant blue hyacinths."
                />
              </Box>
            </Box>
            <Box className="left-side">
              <FloraImage
                source={flowerBlueTransparent1}
                width="15%"
                posBottom="68%"
                posLeft="-6.5%"
                rotateDeg="65deg"
                zIndex={-1}
              />
              <FloraImage
                source={flowerBlueTransparent6}
                width="22%"
                posBottom="10%"
                posLeft="-8.5%"
                rotateDeg="17.5deg"
                zIndex={-1}
              />
              <FloraImage
                source={flowerBlueTransparent2}
                width="16%"
                posBottom="-19%"
                posLeft="22.5%"
                rotateDeg="5deg"
                zIndex={-1}
              />
            </Box>
            <Box className="right-side">
              <FloraImage
                source={flowerBlueTransparent3}
                width="23%"
                posBottom="-6%"
                posRight="5%"
                rotateDeg="-35deg"
                zIndex={-1}
              />
              <FloraImage
                source={flowerBlueTransparent4}
                width="18%"
                posBottom="37.5%"
                posRight="-8%"
                rotateDeg="-35deg"
                zIndex={-1}
              />
              <FloraImage
                source={flowerBlueTransparent5}
                width="10%"
                posBottom="82.5%"
                posRight="-5%"
                rotateDeg="45deg"
                zIndex={-1}
              />
            </Box>
          </FlowersSection>
          <FlowersSection
            baseColor="#ded300"
            midtoneColor="#d2bd00"
            lowlightColor="#c5a700"
            highlightColor="#cca400"
            clipPath="polygon(0 0, 100% 5%, 100% 100%, 0 95%)">
            <Box
              sx={{
                position: "relative",
                width: "80%",
                height: "inherit",
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
                  Our sunflower projects, including the{" "}
                  <b>Sunshine Flower Project</b>,{" "}
                  <b>Golden Bloom Organization</b>, and{" "}
                  <b>Yellow Petal Initiative</b>, bring joy and warmth with
                  their cheerful yellow sunflowers. Symbolizing happiness,
                  positivity, and loyalty, these flowers evoke optimism and
                  resilience, making them perfect for brightening spaces and
                  spreading warmth.
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
                  cardColor="#b69121"
                  borderColor="#76520e"
                  image={flowerYellow1}
                  title="Sunshine Flower Project"
                  desc="Brighten up with our cheerful yellow sunflowers."
                />
                <TiltCard
                  cardColor="#b69121"
                  borderColor="#76520e"
                  image={flowerYellow2}
                  title="Golden Bloom Organization"
                  desc="Spread warmth and joy with our incredibly radiant yellow sunflowers."
                />
                <TiltCard
                  cardColor="#b69121"
                  borderColor="#76520e"
                  image={flowerYellow3}
                  title="Yellow Petal Initiative"
                  desc="Embrace happiness with our vibrant yellow sunflowers."
                />
              </Box>
            </Box>
            <Box className="left-side">
              <FloraImage
                source={flowerYellowTransparent7}
                width="10.5%"
                posBottom="78.5%"
                posLeft="-5.5%"
                rotateDeg="0deg"
                zIndex={-1}
              />
              <FloraImage
                source={flowerYellowTransparent3}
                width="12.5%"
                posBottom="20%"
                posLeft="-5%"
                rotateDeg="40deg"
                zIndex={-1}
              />
              <FloraImage
                source={flowerYellowTransparent6}
                width="26%"
                posBottom="-37.5%"
                posLeft="2.5%"
                rotateDeg="20deg"
                zIndex={-1}
              />
              <FloraImage
                source={flowerYellowTransparent4}
                width="11%"
                posBottom="-10%"
                posLeft="37.5%"
                rotateDeg="0deg"
                zIndex={-1}
              />
            </Box>
            <Box className="right-side">
              <FloraImage
                source={flowerYellowTransparent5}
                width="20%"
                posBottom="-8%"
                posRight="1%"
                rotateDeg="0deg"
                zIndex={-1}
              />
              <FloraImage
                source={flowerYellowTransparent2}
                width="14%"
                posBottom="38%"
                posRight="-5%"
                rotateDeg="-35deg"
                zIndex={-1}
              />
              <FloraImage
                source={flowerYellowTransparent1}
                width="6.5%"
                posBottom="82.5%"
                posRight="-3.5%"
                rotateDeg="0deg"
                zIndex={-1}
              />
            </Box>
          </FlowersSection>
          <TeamSection
            baseColor="#ffbe0b"
            midtoneColor="#fb5607"
            lowlightColor="#ff006e"
            highlightColor="#9454ef">
            <Box
              sx={{
                position: "relative",
                width: "80%",
                height: "inherit",
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
                  OUR TEAM
                </Typography>
                <Typography variant="body1" sx={{ color: "#ececec" }}>
                  Our team is comprised of passionate individuals with diverse
                  backgrounds and expertise, united by a shared vision of
                  excellence and innovation. We foster a collaborative culture
                  of growth and inclusivity, driven by a passion for creating
                  meaningful experiences that inspire and connect people, while
                  making a positive impact in our community and beyond.
                </Typography>
              </Box>
              <Box
                className="cards"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "80px",
                }}>
                <TiltCardEmployee
                  cardColor="#343a40"
                  borderColor="#000000dd"
                  profession="Database Administrator"
                  name="Ethan"
                  lastname="Thompson"
                  photo={employee1}
                  bio="Ethan Thompson is a seasoned team leader with over 8 years of experience in managing databases. He specializes in performance optimization and data security, having previously worked as a senior DBA with expertise in SQL Server and Oracle."
                />
                <TiltCardEmployee
                  cardColor="#343a40"
                  borderColor="#000000dd"
                  profession="Front-end Team Leader"
                  name="Lucas"
                  lastname="Brooks"
                  photo={employee2}
                  bio="Lucas Brooks is a seasoned front-end team leader with over 9 years of experience in web applications using React, Angular, and Vue.js. He specializes in creating responsive UIs and optimizing JavaScript for better performance."
                />
                <TiltCardEmployee
                  cardColor="#343a40"
                  borderColor="#000000dd"
                  profession="UI/UX Design Team Leader"
                  name="Sophia"
                  lastname="Patel"
                  photo={employee3}
                  bio="Sophia Patel is a skilled UI/UX team leader with 6 years of experience in designing mobile apps and websites. She excels at using Sketch, Figma, Adobe XD and Photoshop. Formerly a senior designer, she honed her user experience skills."
                />
              </Box>
            </Box>
          </TeamSection>
          <Footer />
        </>
      )}
    </Box>
  );
};
