import { Card, Image, Text } from "@mantine/core";
import React from "react";
const NewFeatureCards = ({ title, subtitle, color }) => {
  return (
    <Card
      onClick={() => {
        console.log("Testing");
      }}
      styles={{
        root: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          background: `${color}`,
        },
      }}
      classNames={{
        root: "min-h-[40px] rounded-3xl shadow-lg flex flex-col items-center justify-center text-white p-6 hover:scale-105 transition-transform",
      }}
    >
      <Text fw={500} size="lg" mt="md">
        {title}
      </Text>
      <Text mt="xs" c="dimmed" size="sm">
        {subtitle}
      </Text>
    </Card>
  );
};

export default NewFeatureCards;
