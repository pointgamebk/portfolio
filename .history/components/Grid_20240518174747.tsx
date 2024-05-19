import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem
            // id={item.id}
            // key={item.id}
            // title={item.title}
            // description={item.description}
            // className={item.className}
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            //icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
