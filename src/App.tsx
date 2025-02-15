import React from "react";
import { PlantsSection } from "./sections/PlantsSection/PlantsSection.tsx";
import { FlowersSection } from "./sections/FlowersSection/FlowersSection.tsx";
import { Navigation } from "./layout/Navigation/Navigation.tsx";
import { Footer } from "./layout/Footer/Footer.tsx";

export const App = () => {
  return (
    <>
      <Navigation />
      <PlantsSection />
      <FlowersSection
        baseColor="#922D25"
        midtoneColor="#E20338"
        lowlightColor="#EE3D48"
        highlightColor="#B40A1B"
      />
      <FlowersSection
        baseColor="#002D6D"
        midtoneColor="#0043A4"
        lowlightColor="#01142F"
        highlightColor="#0351C1"
      />
      <FlowersSection
        baseColor="#b89900"
        midtoneColor="#c7b40f"
        lowlightColor="#d3cc00"
        highlightColor="#bbb205"
      />
      <FlowersSection
        baseColor="#BCBEC0"
        midtoneColor="#E6E7E8"
        lowlightColor="#D1D3D4"
        highlightColor="#939598"
      />
      <Footer/>
    </>
  );
};
