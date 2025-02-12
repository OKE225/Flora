import React from "react";
import { PlantsSection } from "./sections/PlantsSection/PlantsSection.tsx";
import { Navigation } from "./layout/Navigation/Navigation.tsx";

export const App = () => {
  return (
    <>
      <Navigation />
      <PlantsSection />
    </>
  );
};
