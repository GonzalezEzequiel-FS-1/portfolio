import { Card, Image, Text } from "@mantine/core";
import React from "react";

const NewFeatureCards = ({ title, subtitle, color, image }) => {
  return (
    <Card
      onClick={() => console.log("Card clicked:", title)}
      style={{
        background: color,
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      className="w-screen"
      classNames={{
        section:
          "flex flex-col items-center justify-center text-center rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02]",
      }}
    >
      <Card.Section>
        <Image
          src={image}
          styles={{
            root: {
              padding: "1rem",
              borderRadius: "20px",
            },
          }}
        />
      </Card.Section>
      <Card.Section p="md">
        <Text fw={900} c="white" size="xl" lh={1.3}>
          {title}
        </Text>
        <Text mt="sm" c="white" size="sm" opacity={0.9}>
          {subtitle}
        </Text>
      </Card.Section>
    </Card>
  );
};

export default NewFeatureCards;
