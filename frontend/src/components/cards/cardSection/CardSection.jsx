import React from "react";
import NewFeatureCards from "../NewFeatureCards";
import { showcaseCardContents } from "../../../textFiles/cardData";

const CardSection = () => {
  return (
    <>
      {showcaseCardContents.map((element, i) => (
        <div key={i} className="flex items-center justify-center">
          <NewFeatureCards
            title={element.title}
            subtitle={element.subtitle}
            color={element.color}
          />
        </div>
      ))}
    </>
  );
};

export default CardSection;
