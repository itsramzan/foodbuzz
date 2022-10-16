import React from "react";
import Heading from "../Shared/Heading";
import GridItem from "./GridItem";

const Grid = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <Heading title={title} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
        {items.map((item) => (
          <GridItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
