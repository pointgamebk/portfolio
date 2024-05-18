import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        <BentoGrid>
          {[{ title: "Title1", description: "Desc1" }].map((item) => (
            <BentoGridItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </BentoGrid>
      </BentoGrid>
    </section>
  );
};

export default Grid;
