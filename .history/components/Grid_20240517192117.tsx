import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({ id, title, description, className }) => (
          <BentoGridItem
            key={id}
            title={title}
            description={description}
            className={className}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
