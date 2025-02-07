import React, { Component } from "react";
import "./PlantsSection.scss";
import { Box } from "@mui/material";
import { AnimatedBackground } from "../../components/AnimatedBackground/AnimatedBackground.tsx";

export class PlantsSection extends Component {
  render() {
    return <AnimatedBackground colors={{
      baseColor: "#41B619",
      midtoneColor: "#00DC7D",
      lowlightColor: "#117243",
      highlightColor: "#4D8802",
    }}>
      <Box className="plants-section"></Box>
    </AnimatedBackground>;
  }
}
