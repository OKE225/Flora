import React, { Component } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";
import { Box } from "@mui/material";
import "./PlantsSection.scss";

const config: NeatConfig = {
  colors: [
    {
        color: '#4D8802',
        enabled: true,
    },
    {
        color: '#41B619',
        enabled: true,
    },
    {
        color: '#117243',
        enabled: true,
    },
    {
        color: '#116315',
        enabled: true,
    },
    {
        color: '#00DC7D',
        enabled: true,
    },
],
  speed: 2,
  horizontalPressure: 4,
  verticalPressure: 4,
  waveFrequencyX: 3,
  waveFrequencyY: 3,
  waveAmplitude: 5,
  shadows: 3,
  highlights: 5,
  colorBrightness: 0.9,
  colorSaturation: 7,
  wireframe: false,
  colorBlending: 10,
  backgroundColor: "#000",
  backgroundAlpha: 1,
  grainScale: 1,
  grainIntensity: 0.1,
  grainSpeed: 0,
  resolution: 1,
};

export class PlantsSection extends Component {
  private neat!: NeatGradient;
  private canvasRef = React.createRef<HTMLCanvasElement>();

  componentDidMount() {
    const gradientElement = this.canvasRef.current;

    if (gradientElement) {
      this.neat = new NeatGradient({
        ref: gradientElement,
        ...config,
      });
    } else {
      console.error("Canvas element not found.");
    }
  }

  componentWillUnmount() {
    if (this.neat) {
      this.neat.destroy(); 
    }
  }

  render() {
    return (
      <Box className="plants-section">
        <canvas ref={this.canvasRef} className="canvas"></canvas>
      </Box>
    );
  }
}
