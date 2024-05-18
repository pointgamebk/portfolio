import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        <BentoGrid>{[]}</BentoGrid>
      </BentoGrid>
    </section>
  );
};

export default Grid;
