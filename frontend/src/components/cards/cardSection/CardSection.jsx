import React from "react";
import NewFeatureCards from "../NewFeatureCards";
import { showcaseCardContents } from "../../../textFiles/cardData";

const CardSection = () => {
  return (
    <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
      {showcaseCardContents.map((element, i) => (
        <div key={i} className="flex">
          <NewFeatureCards
            title={element.title}
            subtitle={element.subtitle}
            color={element.color}
            image={element.image}
          />
        </div>
      ))}
    </div>
  );
};

export default CardSection;
